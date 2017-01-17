import Camera from "../rendering/Camera";
import IReferenceObject from "../rendering/IReferenceObject";

class Utils
{
    public static setViewportPos(pixiDisplayObject : PIXI.DisplayObject, mapPosition : IReferenceObject)
    {
        var newPosition = Camera.getViewPortCoordinates(mapPosition);
        pixiDisplayObject.position.x = Math.round(newPosition.x);
        pixiDisplayObject.position.y = Math.round(newPosition.y);
    }
}

export default Utils;