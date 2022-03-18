import { EventListeners } from 'eris';
import { CofoClient } from '../CofoClient';
export declare class Listener<Key extends keyof EventListeners> {
    key: Key;
    run: (client: CofoClient, ...args: EventListeners[Key]) => any;
    constructor(key: Key, run: (client: CofoClient, ...args: EventListeners[Key]) => any);
}
