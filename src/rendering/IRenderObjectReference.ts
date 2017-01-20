import IPoint from "./IPoint";
interface IRenderObjectReference{
    getRotation() : number,
    getPosition() : IPoint,
    getMovementVector() : IPoint
}

export default IRenderObjectReference;