import { DmMessageCollectorOptions } from "../utils/types";
declare module "Eris" {
    interface User {
        createDmMessageCollector(options: DmMessageCollectorOptions): void;
    }
}
