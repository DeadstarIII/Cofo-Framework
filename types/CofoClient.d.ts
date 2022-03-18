import Eris from 'eris';
import { CofoHandler } from './Structures/CofoHandler';
import { Logger } from './Structures/Logger';
import { frameworkOptions } from './utils/types';
export declare class CofoClient extends Eris.Client {
    logger: Logger;
    handler: CofoHandler;
    defaultPrefix: string;
    mentionPrefix: boolean;
    ignoreBots: boolean;
    baseDirectory: string;
    owners: any[];
    testMode: {
        enabled: boolean;
        guildID: string;
    } | undefined;
    constructor(token: string, frameworkOptions: frameworkOptions, options?: Eris.ClientOptions | undefined);
    fetchPrefix(message: Eris.Message<Eris.TextableChannel>): string | undefined;
    connect(): any;
}
