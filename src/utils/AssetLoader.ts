var assets = [
        {src:"assets/sprites/guy.png", id:"Guy"},
        {src:"assets/sprites/coins.png", id:"Coins"},
        {src:"assets/audio/mariocoin.wav", id:"CoinSound"},
        {src:"assets/sprites/bg.png", id:"Bg"},
    ];

class AssetLoader
{
    private assetManifest : any;
    private assetQueue : any;
    private loadedCallback : any;

    constructor(manifest)
    {
        this.assetManifest = manifest;
        this.assetQueue = new createjs.LoadQueue(true);
        this.loadContent();
    }

    private loadContent() {
        createjs.Sound.alternateExtensions = ["mp3"];
        assetQueue.installPlugin(createjs.Sound);
        assetQueue.on("complete", loadComplete);
        assetQueue.on("error", loadError);
        assetQueue.loadManifest(assets);
    }

    private loadError(evt) {
        console.log("Error!",evt.text);
    }

    private loadComplete(event) {
        console.log("Finished Loading Assets");
        if(loadedCallback) loadedCallback();
    }

    public getContent = function(id)
    {
        return assetQueue.getResult(id);
    }

    public onContentLoaded = function(callback)
    {
        loadedCallback = callback;
        if(assetQueue.loaded) loadedCallback();
    }
}

export default new AssetLoader();