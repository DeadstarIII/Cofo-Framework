import Eris from "eris";
declare module "Eris" {
    interface Role {
        higherThan(role: Eris.Role): void;
    }
}
