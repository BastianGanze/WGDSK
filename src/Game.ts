import GameRenderer from "./utils/Renderer";
import AssetLoader from "./utils/AssetLoader";
import {Logger} from "./utils/Logger";
import {Input} from "./utils/Input";

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

    }

    public updatePhysics(delta : number) : void
    {

    }

    public updateCamera(delta : number) : void
    {

    }

    public render() : void
    {

    }
}