/**
 * Abstract Class Control.
 *
 * @class Control
 */

class Control {

    constructor(document, canvas, context, figure1, figure2) {
        if (this.constructor == Control) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.document = document;
        this.canvas = canvas;
        this.context = context;
        this.figure1 = figure1;
        this.figure2 = figure2;
    }

    move() {
        throw new Error("Method 'move()' must be implemented.");
    }
}