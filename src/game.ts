import GameRenderer from "./utils/Renderer";
import AssetLoader from "./utils/AssetLoader";
import {Logger} from "./utils/Logger";

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

    public render() : void
    {

    }
}