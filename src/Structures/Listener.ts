import { EventListeners } from 'eris';
import { CofoClient } from '../CofoClient';

export class Listener<Key extends keyof EventListeners>{
    /**
     * Create a new Listener
     * @since 1.0.0
     * @param key 
     * @param run 
     */
    constructor(
        public key: Key,
        public run: (client: CofoClient, ...args: EventListeners[Key]) => any
    ) {}
}