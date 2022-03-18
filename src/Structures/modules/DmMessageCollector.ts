import { Constants, Message, TextableChannel } from 'eris';
import EventEmitter from 'events';
import { CofoClient } from '../../CofoClient';

export default class DmMessageCollector extends EventEmitter {
    userid: any;
    timeout: any;
    client: CofoClient;
    timeoutID: NodeJS.Timeout;
    filter?: any;
    collected: Set<any>;
    /**
     * Create a new DmMessageCollector
     * @param options 
     */
    constructor(options: { userid: any; timeout: any; client: any; filter?: (msg: Message) => true }) {
        super();
        this.userid = options.userid;
        this.timeout = options.timeout;
        this.client = options.client;
        this.client.setMaxListeners(this.getMaxListeners() + 1)
        this.client.on('messageCreate', (message: Message<TextableChannel>) => this.messageCollect(message));
        const timeoutID = setTimeout(() => {
            this.stop();
        }, this.timeout);
        this.timeoutID = timeoutID;
        this.collected = new Set()
    }
    /* Stop The Message Collector */
    stop() {
        this.client.removeListener('messageCreate', (message: Message<TextableChannel>) => this.messageCollect.bind(message));
        this.endTimeout();
        this.emit('end');
    }
    /* Clear the Collector's Timeout */
    endTimeout() {
        clearTimeout(this.timeoutID);
    }

    /**
     * Handle Message Collect
     * @param {Message} message
     */
    messageCollect(message: Message) {
        if (message.channel.type !== Constants.ChannelTypes.DM && message.author.id !== this.userid) return;
        if(!this.filter(message)) return;
        this.collected.add(message)
        this.emit('collect', message);
    }
};