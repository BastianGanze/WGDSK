import {Logger} from "../utils/Logger";
import Layer from "./Layer";
import IRenderObjectReference from "./IRenderObjectReference";
import Utils from "../utils/Utils";
import IPoint from "./IPoint";

const log = Logger("GameRenderer");

export default class RenderingObject
{
    public referenceObject : IRenderObjectReference;
    public rotation : number;
    public displayObject : PIXI.DisplayObject;
    public layer : Layer;
    public pinToCamera : boolean;

    constructor(displayObject : PIXI.DisplayObject, referenceObject : IRenderObjectReference, layer : Layer, pinToCamera:boolean)
    {
        this.referenceObject = referenceObject;
        this.displayObject = displayObject;
        this.layer = layer;
        this.pinToCamera = pinToCamera?true:false;
    }

    public update(restDelta : number) : void
    {
        const position : IPoint = this.referenceObject.getPosition();
        const movementVector : IPoint = this.referenceObject.getMovementVector();
        const rotation : number = this.referenceObject.getRotation();

        if(this.pinToCamera == false)
        {
            //TODO: interpolate displayObject position with restDelta, using movement vector
            Utils.setViewportPos(this.displayObject, position);
        }
        else
        {
            //TODO: interpolate displayObject position with restDelta, using movement vector
            this.displayObject.position.x = position.x;
            this.displayObject.position.y = position.y;
        }
        this.displayObject.rotation = rotation;
    }
}