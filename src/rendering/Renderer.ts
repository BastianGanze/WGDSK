/// <reference path="../../libssrc/pixi.js.d.ts" />
import {Logger} from "../utils/Logger";
import {Config} from "../Config";
import Layer from "./Layer";
import RenderingObject from "./RenderingObject";
import Utils from "../utils/Utils";

var log = Logger("GameRenderer");

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
        this.setupResizing();
        this.initializeLayer();
    }

    protected setupResizing()
    {
        var $window = $(window), canvas = $(this.gameRenderer.view);

        function viewPortResize()
        {
            var width = $window.width(),
                height = $window.height(),
                stageRatio = Config.STAGE_WIDTH/Config.STAGE_HEIGHT,
                ratio = width/height;

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
        for(var key in Layer)
        {
            if(typeof key == "number")
            {
                var index : number = <number>key;
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
        this.mainContainer.removeChild(renderingObject.displayObject);
        this.renderingObjects = this.renderingObjects.splice(this.renderingObjects.indexOf(renderingObject), 1);
    }

    public updateRenderObjects(restDelta : number)
    {
        for(var i = 0; this.renderingObjects.length; i++)
        {
            if(this.renderingObjects[i].pinToCamera == false)
            {
                //TODO: interpolate displayObject position with restDelta
                Utils.setViewportPos(this.renderingObjects[i].displayObject, this.renderingObjects[i].referenceObject);
            }
        }
    }

    public render(restDelta : number)
    {
        this.updateRenderObjects(restDelta);
        this.gameRenderer.render(this.mainContainer);
    }
}