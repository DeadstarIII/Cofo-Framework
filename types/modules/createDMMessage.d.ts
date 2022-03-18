import Eris from "eris";
declare module "Eris" {
    interface User {
        createMessage(content: Eris.MessageContent, file: Eris.FileContent | Eris.FileContent[] | undefined): void;
    }
}
