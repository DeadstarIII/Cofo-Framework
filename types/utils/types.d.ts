import { CofoClient } from "../CofoClient";
export interface frameworkOptions {
    baseDirectory: string;
    owners: Array<any>;
    defaultPrefix: string;
    mentionPrefix: boolean;
    ignoreBots?: boolean;
    testMode?: {
        enabled: boolean;
        guildID: string;
    };
}
export interface DmMessageCollectorOptions {
    timeout: number;
    client: CofoClient;
}
