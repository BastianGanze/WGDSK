import {Logger} from "../utils/Logger";
import Vector2D from "../utils/Vector2D";
import {Config} from "../Config";
import IPoint from "./IPoint";

const log = Logger("Camera");


class Camera
{
    private _position : IPoint;


    constructor(position : IPoint) {
        this._position = position;
    }

    public getPosition() : IPoint {
        return this._position;
    }

    public setPosition(position : IPoint) : void {
        this._position = position;
    }

    public getViewPortCoordinates(mapCoordinates : IPoint)
    {
        const newPosition = Vector2D.subVec(mapCoordinates, this._position);

        newPosition.add(new Vector2D(Config.STAGE_WIDTH/2, Config.STAGE_HEIGHT/2));

        return newPosition;
    }
}

export default new Camera(new Vector2D(0,0));