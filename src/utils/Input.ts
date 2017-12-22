/// <reference path="../../libssrc/jquery-2.1.4.d.ts" />
import {Logger} from "../utils/Logger";

export module Input
{
    //Define all buttons/actions which are possible here
    export enum Buttons{
        JUMP,
        LEFT,
        RIGHT,
        UP,
        DOWN
    }

    //Define additional input, which is not mapped to the keyboard here
    export enum CustomInput{
        X_AXIS,
        Y_AXIS
    }

    //Actual player input. Use this to create key bindings for multiple players.
    export class PlayerInput
    {
        protected keyBindings : {[id: number] : number;}
        protected keyPressedMap : {[id: number] : number;}
        protected customBindings : {[id: number] : () => number;}
        protected xAxisCallback : () => number;
        protected yAxisCallback : () => number;

        constructor()
        {
            const $document : JQuery = $(document);
            $document.keydown(this.onKeyDown.bind(this));
            $document.keyup(this.onKeyUp.bind(this));
            this.keyBindings = {};
            this.keyPressedMap = {};
            this.customBindings = {};

            //Setting some standard callback functions for x and y axis
            this.xAxisCallback = function(){
                if(this.isButtonPressed(Buttons.LEFT)) return -1;
                if(this.isButtonPressed(Buttons.RIGHT)) return 1;
                return 0;
            }.bind(this);
            this.yAxisCallback = function(){
                if(this.isButtonPressed(Buttons.UP)) return -1;
                if(this.isButtonPressed(Buttons.DOWN)) return 1;
                return 0;
            }.bind(this);
        }

        public setKeyboardBinding(button : Buttons, key : number)
        {
            this.keyBindings[button] = key;
            this.keyPressedMap[key] = 0;
        }

        public setCustomBinding(inputName : CustomInput, currentValueFunction : () => number )
        {
            this.customBindings[inputName] = currentValueFunction;
        }

        public setXAxisCallback(callback : () => number)
        {
            this.xAxisCallback = callback;
        }

        public setYAxisCallback(callback : () => number)
        {
            this.yAxisCallback = callback;
        }

        public getXAxis() : number
        {
            return this.xAxisCallback();
        }

        public getYAxis() : number
        {
            return this.yAxisCallback();
        }

        /**
         * Will return true if Button is being pressed at the time of this function call.
         * @param button
         * @returns {boolean}
         */
        public isButtonPressed(button : Buttons) : boolean
        {
            return this.keyPressedMap[this.keyBindings[button]] === 1;
        }

        public getCustomInputValue(inputName : CustomInput)
        {
            return this.customBindings[inputName]();
        }

        protected onKeyDown(e : any)
        {
            var keyCode = e.which;
            this.keyPressedMap[keyCode] = 1;
        }

        protected onKeyUp(e : any)
        {
            var keyCode = e.which;
            this.keyPressedMap[keyCode] = 0;
        }
    }

    export enum KeyCodes{
        BACKSPACE= 8,
        TAB= 9,
        ENTER= 13,
        SHIFT= 16,
        CTRL= 17,
        ALT= 18,
        PAUSE= 19,
        CAPS_LOCK= 20,
        ESCAPE= 27,
        SPACE= 32,
        PAGE_UP= 33,
        PAGE_DOWN= 34,
        END= 35,
        HOME= 36,
        LEFT_ARROW= 37,
        UP_ARROW= 38,
        RIGHT_ARROW= 39,
        DOWN_ARROW= 40,
        INSERT= 45,
        DELETE= 46,
        KEY_0= 48,
        KEY_1= 49,
        KEY_2= 50,
        KEY_3= 51,
        KEY_4= 52,
        KEY_5= 53,
        KEY_6= 54,
        KEY_7= 55,
        KEY_8= 56,
        KEY_9= 57,
        A= 65,
        B= 66,
        C= 67,
        D= 68,
        E= 69,
        F= 70,
        G= 71,
        H= 72,
        I= 73,
        J= 74,
        K= 75,
        L= 76,
        M= 77,
        N= 78,
        O= 79,
        P= 80,
        Q= 81,
        R= 82,
        S= 83,
        T= 84,
        U= 85,
        V= 86,
        W= 87,
        X= 88,
        Y= 89,
        Z= 90,
        LEFT_META= 91,
        RIGHT_META= 92,
        SELECT= 93,
        NUMPAD_0= 96,
        NUMPAD_1= 97,
        NUMPAD_2= 98,
        NUMPAD_3= 99,
        NUMPAD_4= 100,
        NUMPAD_5= 101,
        NUMPAD_6= 102,
        NUMPAD_7= 103,
        NUMPAD_8= 104,
        NUMPAD_9= 105,
        MULTIPLY= 106,
        ADD= 107,
        SUBTRACT= 109,
        DECIMAL= 110,
        DIVIDE= 111,
        F1= 112,
        F2= 113,
        F3= 114,
        F4= 115,
        F5= 116,
        F6= 117,
        F7= 118,
        F8= 119,
        F9= 120,
        F10= 121,
        F11= 122,
        F12= 123,
        NUM_LOCK= 144,
        SCROLL_LOCK= 145,
        SEMICOLON= 186,
        EQUALS= 187,
        COMMA= 188,
        DASH= 189,
        PERIOD= 190,
        FORWARD_SLASH= 191,
        GRAVE_ACCENT= 192,
        OPEN_BRACKET= 219,
        BACK_SLASH= 220,
        CLOSE_BRACKET= 221,
        SINGLE_QUOTE= 222
    }


}