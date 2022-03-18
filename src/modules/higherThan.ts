import Eris from "eris";

declare module "Eris" {
    interface Role {
        higherThan(role: Eris.Role): void;
    }
}

Eris.Role.prototype.higherThan = function(role: Eris.Role) {
    let firstroleid: any = role.id
    let secondroleid: any = this.id
    if(this.position === role.position) return firstroleid - secondroleid  > 0;
		else return this.position - role.position > 0;
}