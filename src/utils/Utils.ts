import Camera from "../rendering/Camera";
import IPoint from "../rendering/IPoint";


class Utils
{
    public static setViewportPos(pixiDisplayObject : PIXI.DisplayObject, mapPosition : IPoint)
    {
        const newPosition = Camera.getViewPortCoordinates(mapPosition);
        pixiDisplayObject.position.x = Math.round(newPosition.x);
        pixiDisplayObject.position.y = Math.round(newPosition.y);
    }
}

export default Utils;