/// <reference path="../../libssrc/jquery-2.1.4.d.ts" />
import {Logger} from "../utils/Logger";

export class InputConfig{

}

export class Input
{

    constructor(playerConfig : InputConfig)
    {
        var document : JQuery = $(document);
        document.keydown(this.onKeyDown);
        document.keyup(this.onKeyUp);
    }

    protected onKeyDown(e : any)
    {
        console.log(e.which);
    }

    protected onKeyUp(e : any)
    {
        console.log(e.which);
    }

    public getXAxis() : number
    {
        return 0;
    }

    public getYAxis() : number
    {
        return 0;
    }

    public isButtonPressed(key : number) : boolean
    {
        return false;
    }
}