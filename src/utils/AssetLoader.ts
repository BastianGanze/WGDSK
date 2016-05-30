/// <reference path="../../libssrc/createjs-lib.d.ts" />
/// <reference path="../../libssrc/preloadjs.d.ts" />
/// <reference path="../../libssrc/soundjs.d.ts" />
import {Logger} from "../utils/Logger";

var assets : any = [
        {src:"assets/img/test.png", id:"TestImage"},
        {src:"assets/audio/test.wav", id:"TestSound"},
    ], log = Logger("AssetLoader");

class AssetLoader
{
    private assetManifest : any;
    private assetQueue : createjs.LoadQueue;
    private loadedCallbacks : Array<() => void>;

    constructor(manifest : any)
    {
        log.trace("Initializing");
        this.assetManifest = manifest;
        this.assetQueue = new createjs.LoadQueue(true);
        this.loadedCallbacks = [];
        this.loadContent();
    }

    private loadContent() {
        log.trace("Loading content.");
        createjs.Sound.alternateExtensions = ["mp3"];
        this.assetQueue.installPlugin(() => {return createjs.Sound});
        this.assetQueue.on("complete", this.loadComplete.bind(this));
        this.assetQueue.on("error", this.loadError);
        this.assetQueue.loadManifest(assets);
    }

    private loadError(event : any) {
        log.error("There was an error while loading assets:");
        log.error(event.text);
    }

    private loadComplete(event : any) {
        log.trace("Completed Loading assets.");
        this.executeCallbacks();
    }

    public getContent(id : string)
    {
        log.trace("Getting content with id\""+id+"\"");
        return this.assetQueue.getResult(id);
    }

    private executeCallbacks(){
        log.trace("Executing onLoad callbacks.");
        for(var i = 0; i < this.loadedCallbacks.length; i++)
        {
            this.loadedCallbacks[i]();
        }
    }

    public onContentLoaded(callback : () => void)
    {
        log.trace("Registering onLoad callback.");
        if(this.assetQueue.loaded) callback();
        else this.loadedCallbacks.push(callback);
    }
}

export default new AssetLoader(assets);