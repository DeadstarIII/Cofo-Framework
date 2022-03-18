import { CommandInteraction, Constants, EventListeners, Message } from 'eris';
import glob from 'glob';
import { CofoClient } from '../CofoClient';

export class CofoHandler {
    /* The Client Which Shall Be Accessed Only Within This File */
    private client: CofoClient;
    /* The Commands Map Which Shall Contain All The Client Commands */
    public commands: Map<any, any>;
    /* The Components Map Which Shall Contain All The Components */
    public components: Map<any, any>;
    /* The Aliases Map Which Shall Contain All The Aliases */
    public aliases: Map<any, any>;
    /* The Cooldowns Map Which Shall Contain All The Cooldown Stuff */
    private cooldowns: Set<any>;
    /* The Slash Commands Set Which Shall Contain All The Cooldown Stuff */
    private slashCommandsCooldown: Set<unknown>;
    /**
     * Create a new Handler
     * @param client 
     * @since 1.0.0
     */
    constructor(client: CofoClient) {
        this.client = client;
        this.commands = new Map();
        this.components = new Map();
        this.aliases = new Map();
        this.cooldowns = new Set();
        this.slashCommandsCooldown = new Set()
        this.cacheListeners().catch((e) => {
            console.log(e)
            this.client.logger.error("Failed to load listeners")
        })
        this.client.on('ready', async () => {
            this.cacheCommands().then(() => {
                this.client.logger.info(`Successfully loaded ${this.commands.size} commands!`);
                this.registerSlashCommands().then(() => { this.client.logger.info("Successfully Registered Slash Commands") })
            }).catch((e) => {
                console.log(e)
                this.client.logger.error('Failed to load commands');
            })
        });
        this.client.on('messageCreate', (message: Message) => this.handleMessageCommand.call(this, message));
        this.client.on('interactionCreate', async (interaction) => {
            if (interaction instanceof CommandInteraction) {
                this.handleInteractionCommand(interaction);
            }
        });
    }
    /**
     * Import a command file
     * @param filePath 
     * @returns 
     */
    private async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }
    /**
     * Cache All The Component Files
     */
    async cacheComponents() {
        const componentFiles = glob.sync(this.client.baseDirectory + '/components/**/*{.ts,.js}');
        const promises = componentFiles.map(async (file) => {
            const { ComponentClass } = await this.importFile(file);
            const component = new ComponentClass(this.client);
        });
    }
    /**
     * Register Slash Commands
     */
    async registerSlashCommands() {

        if (this.client.testMode?.enabled) {
            for (const command of this.commands.values()) {
                if (command.slash == true) {
                    await new Promise<void>((resolve) => {
                        setTimeout(async () => {
                            await this.client.createGuildCommand(this.client.testMode?.guildID as string, {
                                name: command.name,
                                description: command.description,
                                type: 1,
                                options: command.options,
                                defaultPermission: command.defaultPermission
                            });
                        }, 8000)
                    })
                }
            }
        } else {
            for (const command of this.commands.values()) {
                if (command.slash == true) {
                    await new Promise<void>((resolve) => {
                        setTimeout(async () => {
                            await this.client.createCommand({
                                name: command.name,
                                description: command.description,
                                type: 1,
                                options: command.options,
                                defaultPermission: command.defaultPermission
                            })
                        })
                    })
                }
            }
        }
    }
    /**
     * Cache all the listeners and listen the websocket for them
     */
    async cacheListeners() {
        const listenerFiles = glob.sync(this.client.baseDirectory + "/listeners/**/*{.ts,.js}");

        listenerFiles.forEach(async (file) => {
            const event = await this.importFile(file);
            this.client.on(event.key, (...args) => event.run(this.client, ...args))
        })
    }
    /**
     * Cache all commands to a map
     */
    async cacheCommands() {
        /* Load all The Command Files */
        const commandFiles = glob.sync(this.client.baseDirectory + '/commands/**/*{.ts,.js}');

        const promises = commandFiles.map(async (file) => {
            const { default: CommandClass } = await import(file);
            const targetFile = new CommandClass(this.client);
            this.commands.set(targetFile.name, targetFile);
            const commandAliases = targetFile.aliases as Array<any>
            if (targetFile.aliases) {
                commandAliases.forEach((alias) => {
                    this.aliases.set(alias, targetFile.name)
                })
            }
        });

        await Promise.all(promises);
    }
    /**
     * Get a command from the Map
     * @param commandName 
     * @returns 
     */
    fetchCommand(commandName: string) {
        return this.commands.get(commandName);
    }
    /**
     * Handle a Message
     * @param message 
     * @returns 
     */
    handleMessageCommand(message: Message) {
        /* If the author is a bot and ignoreBots is enabled, return */
        if (message.author.bot && this.client.ignoreBots) return;
        let prefix = '';
        if (this.client.mentionPrefix) {
            let mentionRegex = message.content.match(new RegExp(`^<@!?(${this.client.user.id})>`, 'gi'));
            prefix = mentionRegex![0];
        }
        const customprefix = this.client.fetchPrefix(message);
        if (customprefix) {
            prefix = customprefix;
        } else {
            prefix = this.client.defaultPrefix;
        }
        // If the message doesn't start with prefix, return..
        if (!message.content.startsWith(prefix)) return;
        // Get the arguments of the command.
        const args = message.content.slice(prefix.length).trim().split(/ +/g) as Array<any>;
        // Get the command name
        const cmd = args?.shift().toLowerCase();
        // Fetch the command from the maps
        const command = this.fetchCommand(cmd) || this.commands.get(this.aliases.get(cmd))
        // If the command doesn't exist, return
        if (!command) return;
        // If the command is guildOnly and message doesn't have a guildID aka doesn't belong to a guild, return.
        if (command.guildOnly && message.guildID) return;
        // If the command is dmOnly and the channel is not a dm channel, return
        if (command.dmOnly && message.channel.type !== Constants.ChannelTypes.DM) return;
        // Get the guild from the bot
        /**
         * @WARNING
         * 
         * ERIS REST MODE SHOULD BE TURNED ON FOR THIS
         */
        const guild = this.client.guilds.get(message.guildID as any);

        if (command.guildOwneronly && message.author.id !== guild?.ownerID) return;
        // If the command is bot's owner only and owners array doesn't include message's author id, return.
        if (command.botOwnerOnly && !this.client.owners.includes(message.author.id)) return;
        // If the command requires args but args array is empty, return
        if (command.argsRequired && args.length == 0) return;
        if (command.cooldown && this.cooldowns.has(message.author.id)) {
            return this.client.createMessage(message.channel.id, {
                content: command.cooldownMessage,
                messageReference: {
                    messageID: message.id,
                }
            })
        }
        if (command.customPrecondition && !command.customPrecondition(message)) return;
        // Execute the command
        command.messageRun(this.client, message, args);
        if (command.cooldown) {
            this.cooldowns.add(message.author.id)
            setTimeout(() => this.cooldowns.delete(message.author.id), command.cooldown)
        }
        // If the command requires the message to be deleted
        if (command.deleteCommand) message.delete();
    }
    /**
     * Handle Interaction Commands
     * @param interaction 
     * @returns 
     */
    handleInteractionCommand(interaction: CommandInteraction) {
        const command = this.fetchCommand(interaction.data.name);
        if (!command) return;
        if (!command.interactionRun) return;
        if (command.guildOnly && interaction.guildID) return;
        if (command.dmOnly && interaction.channel.type !== Constants.ChannelTypes.DM) return;
        const userid = interaction.user?.id || interaction.member?.id
        const guild = this.client.guilds.get(interaction.guildID as any);
        if (command.guildOwneronly && userid !== guild?.ownerID) return;
        if (command.botOwnerOnly && !this.client.owners.includes(userid)) return;
        if (command.cooldown && this.slashCommandsCooldown.has(userid)) {
            return interaction.createMessage({
                content: command.cooldownMessage
            })
        }
        if (command.cooldown) this.slashCommandsCooldown.add(userid)
        if (command.customInteractionPreCondition && !command.customInteractionPreCondition(interaction)) return;
        try {
            command.interactionRun(this.client, interaction);
            if (command.cooldown) setTimeout(() => this.slashCommandsCooldown.delete(userid), command.cooldown)
        } catch (e) {
            this.client.logger.error(`Error Occured While Executing Interaction Command: ${interaction.data.name}`);
            this.client.logger.error(e as any);
        }
    }
}