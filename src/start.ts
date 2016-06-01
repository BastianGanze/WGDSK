import Game from "./Game";
import AssetLoader from "./utils/AssetLoader";
import GameRenderer from "./utils/Renderer";

document.addEventListener("DOMContentLoaded", function(event) {
    AssetLoader.onContentLoaded(function()
    {
        var game : Game = new Game(),
            lastTime : number = 0,
            delta : number;

        GameRenderer.addToMainContainer(new PIXI.Sprite());

        function mainLoop(time : number) {

            window.requestAnimationFrame( mainLoop );
            delta = time - lastTime;
            game.update(delta);
            game.render();
            lastTime = time;
        }
        window.requestAnimationFrame( mainLoop );
    });
});