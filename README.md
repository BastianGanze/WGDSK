# WGDSK
Web Game Development Starter Kit

WGDSK is a boilerplate for web develeopment with Typescript.
It aims to kickstart your game development by providing all the tools you need to transpile, debug, test and create test-coverage for your game. 
It adds some utilities on its own, like an input manager, a logger, a communication service for websockets and an enhanced sprite animation class.

WGDSK is not supposed to be an engine or a framework and you can do whatever you want with it.

Code Example for how to use the Input utilities:
```js
var player1Input : Input.PlayerInput = new Input.PlayerInput();
player1Input.setKeyboardBinding(Input.Buttons.LEFT, Input.KeyCodes.A);
player1Input.setKeyboardBinding(Input.Buttons.RIGHT, Input.KeyCodes.D);
player1Input.setKeyboardBinding(Input.Buttons.UP, Input.KeyCodes.W);
player1Input.setKeyboardBinding(Input.Buttons.DOWN, Input.KeyCodes.S);
player1Input.setKeyboardBinding(Input.Buttons.JUMP, Input.KeyCodes.SPACE);
console.log(player1Input.isButtonPressed(Input.Buttons.JUMP));
```

