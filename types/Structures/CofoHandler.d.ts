import { CommandInteraction, Message } from 'eris';
import { CofoClient } from '../CofoClient';
export declare class CofoHandler {
    private client;
    commands: Map<any, any>;
    components: Map<any, any>;
    aliases: Map<any, any>;
    private cooldowns;
    private slashCommandsCooldown;
    constructor(client: CofoClient);
    private importFile;
    cacheComponents(): Promise<void>;
    registerSlashCommands(): Promise<void>;
    cacheListeners(): Promise<void>;
    cacheCommands(): Promise<void>;
    fetchCommand(commandName: string): any;
    handleMessageCommand(message: Message): Promise<Message<import("eris").TextableChannel>> | undefined;
    handleInteractionCommand(interaction: CommandInteraction): Promise<void> | undefined;
}
