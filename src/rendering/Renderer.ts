/// <reference path="../../libssrc/pixi.js.d.ts" />
import {Logger} from "../utils/Logger";
import {Config} from "../Config";
import Layer from "./Layer";
import RenderingObject from "./RenderingObject";

const log = Logger("GameRenderer");

export default class GameRenderer
{
    private gameRenderer : PIXI.SystemRenderer;
    private mainContainer : PIXI.Container;
    protected displayGroups : { [key:number]: PIXI.DisplayGroup };
    protected renderingObjects : Array<RenderingObject>;

    constructor()
    {
        log.trace("Initializing Gamer Renderer.");
        this.gameRenderer = PIXI.autoDetectRenderer(Config.STAGE_WIDTH, Config.STAGE_HEIGHT);
        this.gameRenderer.backgroundColor = Config.BG_COLOR;
        document.body.appendChild(this.gameRenderer.view);
        this.mainContainer = new PIXI.Container();
        this.renderingObjects = [];
        this.displayGroups = {};
        this.setupResizing();
        this.initializeLayer();
    }

    protected setupResizing()
    {
        const $window = $(window), canvas = $(this.gameRenderer.view);

        function viewPortResize()
        {
            const width = $window.width();
            const height = $window.height();
            const stageRatio = Config.STAGE_WIDTH/Config.STAGE_HEIGHT;
            const ratio = width/height;

            if(ratio > stageRatio)
            {
                canvas.css('width', height*stageRatio);
                canvas.css('height', height);
            }
            else
            {
                canvas.css('width', width);
                canvas.css('height', width/stageRatio);
            }
        }

        $window.resize(function(e)
        {
            viewPortResize();
        });

        viewPortResize();
    }

    public initializeLayer() : void
    {
        for(let key in Layer)
        {
            const index = parseInt(key);
            if(typeof index == "number")
            {
                this.displayGroups[index] = new PIXI.DisplayGroup(index);
            }
        }
    }

    public addRenderObject(renderingObject : RenderingObject) : void
    {
        log.trace("Adding new display object to render.");
        renderingObject.displayObject.displayGroup = this.displayGroups[renderingObject.layer];
        this.renderingObjects.push(renderingObject);
        this.mainContainer.addChild(renderingObject.displayObject);
    }

    public removeRenderObject(renderingObject : RenderingObject)
    {
        log.trace("Removing render object.");
        var indexOfRenderingObject = this.renderingObjects.indexOf(renderingObject);
        if(indexOfRenderingObject > -1)
        {
            this.mainContainer.removeChild(renderingObject.displayObject);
            this.renderingObjects = this.renderingObjects.splice(indexOfRenderingObject, 1);
        }
        else
        {
            log.warn("Tried to remove a renderingObject that was not added earlier.");
        }
    }

    public updateRenderObjects(restDelta : number)
    {
        for(var i = 0; i < this.renderingObjects.length; i++)
        {
            this.renderingObjects[i].update(restDelta);
        }
    }

    public render(restDelta : number)
    {
        this.updateRenderObjects(restDelta);
        this.gameRenderer.render(this.mainContainer);
    }
}