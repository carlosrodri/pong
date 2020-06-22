/**
 * Pong
 *
 * @class Pong
 */

class Pong {
    winPoints = 0;
    playerUpPoints = 0;
    playerDownPoints = 0;

    name = '';
    static instance;

    constructor(document, canvas, posX, posY, winPoints, name) {
        if(!!Pong.instance){
            return Pong.instance
        }
        Pong.instance = this;
        this.name = name;
        
        this.document = document;
        this.canvas = canvas;
        this.posX = posX;
        this.PosY = posY;
        this.winPoints = winPoints * 2;
        this.context = this.canvas.getContext("2d");

        this.context.beginPath();
        this.context.moveTo(0,160);//this.context.height);
        this.context.lineTo(480,160);//this.context.height/2, this.context.height/2);
        this.context.stroke();

        this.paddle1 = new Rectangle(
            this.canvas,
            this.context,
            posX + this.canvas.width / 2,
            posY,
            "#000"
        );
        this.paddle1.setHeigth(10);
        this.paddle1.setWidth(75);

        this.paddle2 = new Rectangle(
            this.canvas,
            this.context,
            posX + this.canvas.width / 2,
            310,
            "#3f6592"
        );
        this.paddle2.setHeigth(10);
        this.paddle2.setWidth(75);

        this.controlPaddle = new ControlPaddle(this.document, this.canvas, this.context,
            this.paddle1, this.paddle2);

        this.ball = new Circle(
            this.canvas,
            this.context,
            this.canvas.width / 2,
            this.canvas.height - this.paddle1.height,
            "#f5003f"
        );

        this.ball.setRadius(5);
        this.controlBall = new ControlBall(
            this.document,
            this.canvas,
            this.context,
            this.ball
        );
    }

    draw() {

        this.validateMovements();

        if (this.paddle2.posY === this.ball.posY && (this.paddle2.posX - this.ball.posX <= 0 &&
            this.paddle2.posX - this.ball.posX >= -75)) {
            this.controlBall.intersect('down')
        } else {

        }

        if (this.paddle1.posY === this.ball.posY - 10 && (this.paddle1.posX - this.ball.posX <= 0 &&
            this.paddle1.posX - this.ball.posX >= -75)) {
            this.controlBall.intersect('up')
        } else { }

        this.context.clearRect(
            this.posX,
            this.PosY,
            this.canvas.width,
            this.canvas.height
        )

        this.controlPaddle.move();
        this.controlBall.move();
    }

    /**
     * arrelgar esto
     */
    validateMovements() {
        //console.log(this.ball.posY, this.canvas.height);
        if (this.ball.posY + 6 === this.canvas.height) {
            this.playerUpPoints++;
            console.log(' pega abajo ' + this.playerUpPoints);
            this.drawPointsX();
            this.validatePoints();
        }

        if (this.ball.posY === 0) {
            this.playerDownPoints++;
            console.log('pega arriba' + this.playerDownPoints);
            this.drawPointsY();
            this.validatePoints();
        }
    }

    drawPointsX() {
        console.log(this.playerUpPoints );
        if (this.playerUpPoints % 2 == 0 || this.playerUpPoints == 1) {
            let aux = this.playerUpPoints / 2;
            let playerup = document.getElementById("playerup");
            playerup.innerText = aux;
        }

    }

    drawPointsY() {
        console.log(this.playerDownPoints );
        if (this.playerDownPoints % 2 == 0 || this.playerDownPoints == 1 ) {
            let aux = this.playerDownPoints / 2;
            let playerdown = document.getElementById("playerdown");
            playerdown.innerText = aux;
        }
    }

    validatePoints() {
        if (this.playerDownPoints === this.winPoints) {
            setTimeout(function(){
                alert('Jugador de abajo ha ganado');
            }, 10); 
            
        } else if (this.playerUpPoints === this.winPoints) {
            setTimeout(function(){
                alert('Jugador de arriba ha ganado');
            }, 10);
        }
    }
}