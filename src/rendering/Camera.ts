import {Logger} from "../utils/Logger";
import Vector2D from "../utils/Vector2D";
import {Config} from "../Config";
import IReferenceObject from "./IReferenceObject";

var log = Logger("Camera");


class Camera
{
    private _position : IReferenceObject;


    constructor(position : IReferenceObject) {
        this._position = position;
    }

    public getPosition() : IReferenceObject {
        return this._position;
    }

    public setPosition(position : IReferenceObject) : void {
        this._position = position;
    }

    public getViewPortCoordinates(mapCoordinates : IReferenceObject)
    {
        var newPosition = Vector2D.subVec(mapCoordinates, this._position);

        newPosition.add(new Vector2D(Config.STAGE_WIDTH/2, Config.STAGE_HEIGHT/2));

        return newPosition;
    }
}

export default new Camera(new Vector2D(0,0));