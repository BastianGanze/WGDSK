/// <reference path="../libssrc/jquery-2.1.4.d.ts" />
import Game from "./Game";
import AssetLoader from "./utils/AssetLoader";

$(document).ready(function(event) {
    AssetLoader.onContentLoaded(function()
    {
        var game : Game = new Game(),
            lastTime : number = 0,
            timeStep : number = 60 / 1000,
            timeToUpdate : number = 0;

        function mainLoop(time : number) {

            window.requestAnimationFrame( mainLoop );
            timeToUpdate = timeToUpdate + Math.min(1, (time - lastTime)/1000);
            while(timeToUpdate > timeStep)
            {
                timeToUpdate = timeToUpdate - timeStep;
                game.update(timeStep);
            }
            game.updateCamera(timeToUpdate);
            game.render(timeToUpdate);
            lastTime = time;
        }
        window.requestAnimationFrame( mainLoop );
    });
});