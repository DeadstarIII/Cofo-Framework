/// <reference types="node" />
import { Message } from 'eris';
import EventEmitter from 'events';
import { CofoClient } from '../../CofoClient';
export default class DmMessageCollector extends EventEmitter {
    userid: any;
    timeout: any;
    client: CofoClient;
    timeoutID: NodeJS.Timeout;
    filter?: any;
    collected: Set<any>;
    constructor(options: {
        userid: any;
        timeout: any;
        client: any;
        filter?: (msg: Message) => true;
    });
    stop(): void;
    endTimeout(): void;
    messageCollect(message: Message): void;
}
