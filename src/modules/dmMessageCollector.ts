import Eris from "eris";
import DmMessageCollector from "../Structures/modules/DmMessageCollector";
import { DmMessageCollectorOptions } from "../utils/types";

declare module "Eris" {
    interface User {
        createDmMessageCollector(options: DmMessageCollectorOptions): void
    }
}

Eris.User.prototype.createDmMessageCollector = function(options: DmMessageCollectorOptions) {
    return new DmMessageCollector({
        userid: this.id,
        timeout: options.timeout,
        client: options.client,
    })
}