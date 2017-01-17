import GameRenderer from "./rendering/Renderer";
import AssetLoader from "./utils/AssetLoader";
import {Logger} from "./utils/Logger";
import {Input} from "./utils/Input";
import Camera from "./rendering/Camera";
import Vector2D from "./utils/Vector2D";

var log = Logger("Game");

export default class Game
{
    private gameRenderer : GameRenderer;

    constructor()
    {
        this.gameRenderer = new GameRenderer();
    }

    public update(delta : number) : void
    {
        this.updatePhysics(delta);
        this.updateCamera(delta);
    }

    public updatePhysics(delta : number) : void
    {

    }

    public updateCamera(delta : number) : void
    {
        Camera.setPosition(new Vector2D(0,0));
    }

    public render(restDelta: number) : void
    {
        this.gameRenderer.render(restDelta);
    }
}