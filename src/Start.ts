/// <reference path="../libssrc/jquery-2.1.4.d.ts" />
import Game from "./Game";
import AssetLoader from "./utils/AssetLoader";

$(document).ready(function(event) {
    AssetLoader.onContentLoaded(function()
    {
        var game : Game = new Game(),
            lastTime : number = 0,
            delta : number;

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