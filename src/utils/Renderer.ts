/// <reference path="../../libssrc/pixi.js.d.ts" />
import {Logger} from "../utils/Logger";
import {Config} from "../Config";

var log = Logger("GameRenderer");

class GameRenderer
{
    private gameRenderer : PIXI.SystemRenderer;
    private mainContainer : PIXI.Container;

    constructor()
    {
        log.trace("Initializing Gamer Renderer.");
        this.gameRenderer = PIXI.autoDetectRenderer(Config.STAGE_WIDTH, Config.STAGE_HEIGHT);
        this.gameRenderer.backgroundColor = Config.BG_COLOR;
        document.body.appendChild(this.gameRenderer.view);
        this.mainContainer = new PIXI.Container();
    }

    public addToMainContainer(sprite : PIXI.Sprite|PIXI.Container)
    {
        log.trace("Adding something to main container.");
        this.mainContainer.addChild(sprite);
    }

    public removeFromMainContainer(sprite : PIXI.Sprite|PIXI.Container)
    {
        log.trace("Removing something from main container.");
        this.mainContainer.removeChild(sprite);
    }
}

export default new GameRenderer();