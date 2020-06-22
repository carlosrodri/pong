/**
 * ControlBall.
 *
 * @class ControlBall
 * @extends {Control}
 */

var codeKey = 0;
var relativeX = 0;
var inMouse = false;
var lives = 3;

class ControlBall extends Control {

    constructor(document, canvas, context, ball, paddle) {
        super(document, canvas, context, ball);
        this.ball = ball;
        this.paddle = paddle;
        this.delta = 2;
        this.deltaX = 1;
        this.rigthLimit = this.canvas.width - this.figure1.radius;
        this.downLimit = this.canvas.height - (this.ball.radius + this.delta);
        this.upLimit = (this.ball.radius - this.delta);
        this.leftLimit = this.figure1.radius;
        this.verticalDirUp = true;
        this.horizontalDirRigth = true;
    }

    move() {

        if (this.verticalDirUp) {
            if ((this.figure1.posY + this.delta) < this.upLimit) {
                //console.log(this.figure1.posY + this.delta);
                // console.log(this.upLimit);
                this.verticalDirUp = false;
            } else {
                this.upLimit = (this.ball.radius - this.delta);
                this.figure1.goToUp(this.delta);
            }
        } else {
            if ((this.figure1.posY - this.delta) > this.downLimit) {
                this.verticalDirUp = true;
            } else {
                this.figure1.goToDown(this.delta);
            }
        }

        if (this.horizontalDirRigth) {
            if ((this.figure1.posX + this.delta) < this.leftLimit) {
                //console.log(this.figure1.posY + this.delta);
                // console.log(this.upLimit);
                this.horizontalDirRigth = false;
            } else {
                this.figure1.goToLeft(this.deltaX);
            }
        } else {
            if ((this.figure1.posX - this.delta) > this.rigthLimit) {
                this.horizontalDirRigth = true;
            } else {
                this.figure1.goToRigth(this.deltaX);
            }
        }


        /*this.figure1.goToRigth(this.delta);

        if (this.figure1.PosY + this.deltaY < this.figure1.radius) {
            this.deltaY *= -1;
        } else if (this.figure1.PosY + this.deltaY > this.canvas.height - this.figure1.radius) {
            if (this.figure1.PosX > this.paddle.posX && x < this.paddle.posX + this.paddle, width) {
                this.deltaY *= -1;
            } else {
                lives--;
                this.figure1.PosX = this.canvas.width / 2;
                this.figure1.PosY = this.canvas.height - 30;
                this.deltaX = 2;
                this.deltaY = -2;
                this.paddle.posX = (this.canvas.width - this.paddle.width) / 2;
            }
        }*/

        this.figure1.draw();
    }

    intersect(paddle) {
        if (paddle === "up") {
            this.upLimit = 20;
            this.verticalDirUp = false;
        } else {
            this.verticalDirUp = true;
            this.upLimit = (this.ball.radius - this.delta)
        }
    }
}