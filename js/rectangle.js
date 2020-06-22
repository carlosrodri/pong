/**
 * Rectangle.
 *
 * @class Rectangle
 * @extends {Figura}
 */

class Rectangle extends Figure {

    constructor(canvas, context, posX, posY, fillStyle) {
        super(canvas, context, posX, posY, fillStyle);
        this.height = 0;
        this.width = 0;
    }

    setHeigth(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.posX, this.posY, this.width, this.height);
        this.context.fillStyle = this.fillStyle;
        this.context.fill();
        this.context.closePath();


        this.context.beginPath();
        this.context.moveTo(0,160);//this.context.height);
        this.context.lineTo(480,160);//this.context.height/2, this.context.height/2);
        this.context.stroke();
    }

}