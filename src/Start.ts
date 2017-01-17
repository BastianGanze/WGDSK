/// <reference path="../libssrc/jquery-2.1.4.d.ts" />
import Game from "./Game";
import AssetLoader from "./utils/AssetLoader";

$(document).ready(function(event) {
    AssetLoader.onContentLoaded(function()
    {
        var game : Game = new Game(),
            lastTime : number = 0,
            timeStep : number = 60 / 1000,
            delta : number;

        function mainLoop(time : number) {

            window.requestAnimationFrame( mainLoop );
            delta = delta + Math.min(1, (time - lastTime)/1000);
            while(delta > timeStep)
            {
                delta = delta - timeStep;
                game.update(timeStep);
            }
            game.updateCamera(delta);
            game.render(delta);
            lastTime = time;
        }
        window.requestAnimationFrame( mainLoop );
    });
});