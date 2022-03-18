import { ApplicationCommandOptions, CommandInteraction, Message } from "eris";
import { CofoClient } from "../CofoClient";

export class Command {
    private client: CofoClient;
    name: string;
    description: string | undefined;
    options?: ApplicationCommandOptions[] | undefined;
    cooldown?: number | undefined;
    guildOnly?: boolean
    dmOnly?: boolean
    guildOwneronly?: boolean;
    botOwnerOnly?: boolean;
    aliases?: Array<any>;
    usage?: string;
    argsRequired?: boolean;
    cooldownMessage?: string;
    deleteCommand?: boolean;
    defaultPermission?: boolean | undefined;
    slash?: boolean | false
    customPrecondition?: (message: Message) => boolean;
    customInteractionPreCondition?: (interaction: CommandInteraction) => boolean;
    /**
     * Create a new command
     * @since 1.0.0
     * @param client 
     * @param options 
     */
    constructor(client: CofoClient, options: { name: string, description?: string | undefined, options?: ApplicationCommandOptions[] | undefined, cooldown?: number | undefined, guildOnly?: boolean | undefined, dmOnly?: boolean | undefined, guildOwnerOnly?: boolean | undefined, botOwnerOnly?: boolean | undefined, aliases?: Array<any>, usage?: string, argsRequired?: boolean, cooldownMessage?: string, deleteCommand?: boolean, defaultPermission?: boolean | undefined, slash?: boolean | false, customPrecondition?: (message: Message) => boolean, customInteractionPreCondition?: (interaction: CommandInteraction) => boolean  }) {
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.options = options.options;
        this.cooldown = options.cooldown;
        this.guildOnly = options.guildOnly || true
        this.dmOnly = options.dmOnly;
        this.guildOwneronly = options.guildOwnerOnly;
        this.botOwnerOnly = options.botOwnerOnly;
        this.aliases = options.aliases;
        this.usage = options.usage;
        this.argsRequired = options.argsRequired;
        this.cooldownMessage = options.cooldownMessage || "You are on cooldown, try again later!";
        this.deleteCommand = options.deleteCommand;
        this.defaultPermission = options.defaultPermission
        this.slash = options.slash
        this.customPrecondition = options.customPrecondition
        this.customInteractionPreCondition = options.customInteractionPreCondition
    }

}