import {Logger} from "../utils/Logger";
import IReferenceObject from "./IReferenceObject";
import Layer from "./Layer";

var log = Logger("GameRenderer");

export default class RenderingObject
{
    public referenceObject : IReferenceObject;
    public movementVector : IReferenceObject;
    public displayObject : PIXI.DisplayObject;
    public layer : Layer;
    public pinToCamera : boolean;

    constructor(displayObject : PIXI.DisplayObject, referenceObject : IReferenceObject, movementVector : IReferenceObject, layer : Layer, pinToCamera:boolean)
    {
        this.referenceObject = referenceObject;
        this.movementVector = movementVector;
        this.displayObject = displayObject;
        this.layer = layer;
        this.pinToCamera = pinToCamera?true:false;
    }
}