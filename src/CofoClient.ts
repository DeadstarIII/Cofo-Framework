import Eris, { Message } from 'eris'
import { CofoHandler } from './Structures/CofoHandler'
import { Logger } from './Structures/Logger';
import packagejson from '../package.json';
import { frameworkOptions } from './utils/types';

export class CofoClient extends Eris.Client {
    public logger: Logger
    public handler: CofoHandler
    public defaultPrefix: string;
    public mentionPrefix: boolean;
    public ignoreBots: boolean;
    public baseDirectory: string;
    public owners: any[];
    public testMode: { enabled: boolean; guildID: string; } | undefined;
    /**
     * Create a new Bot
     * @param token 
     * @param options 
     * @param frameworkOptions 
     */
    constructor(token: string, frameworkOptions: frameworkOptions, options?: Eris.ClientOptions | undefined) {
        super(token, options!)
        this.baseDirectory = frameworkOptions.baseDirectory
        this.logger = new Logger()
        this.handler = new CofoHandler(this)
        this.defaultPrefix = frameworkOptions.defaultPrefix
        this.mentionPrefix = frameworkOptions.mentionPrefix
        this.ignoreBots = frameworkOptions.ignoreBots || true
        this.owners = frameworkOptions.owners;
        this.testMode = frameworkOptions.testMode
    }


    public fetchPrefix(message: Eris.Message<Eris.TextableChannel>): string | undefined {
        return undefined
    }
    connect(): any {
        console.log(
            `
            ██████╗ ██████╗ ███████╗ ██████╗ 
            ██╔════╝██╔═══██╗██╔════╝██╔═══██╗
            ██║     ██║   ██║█████╗  ██║   ██║
            ██║     ██║   ██║██╔══╝  ██║   ██║
            ╚██████╗╚██████╔╝██║     ╚██████╔╝
             ╚═════╝ ╚═════╝ ╚═╝      ╚═════╝ 
                                              
                Version: ${packagejson.version}
                Donate: https://github.com/Cofo-Bot/Framework

                \x1b[1m\x1b[35mThanks For Using Cofo-Framework\x1b[0m
            `
        )
        this.logger.info("Trying to establish a connection")
        super.connect.call(this)
        this.on("ready", async () => {
            this.logger.info(`Successfully connected as ${this.user.username}`)
        })
    }
}