import Game from "./Game";

document.addEventListener("DOMContentLoaded", function(event) {

    var game = new Game(),
        lastTime = 0,
        delta;

    function mainLoop(time) {

        window.requestAnimationFrame( mainLoop );

        delta = time - lastTime;
        game.update(delta);
        game.render();
        lastTime = time;
    }
    window.requestAnimationFrame( mainLoop );
});