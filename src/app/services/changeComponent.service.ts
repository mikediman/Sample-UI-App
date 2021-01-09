import { Injectable } from "@angular/core";

@Injectable()
export class ChangeComponentService {
    public changeComponent: boolean = false;

    constructor() {}

    public moveToResetPassword(value: boolean) {
        if(value === true) {
            this.changeComponent = true;
        } else {
            this.changeComponent = false;
        }
        return this.changeComponent;
    }
}