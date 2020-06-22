/**
 *
 * main
 */

var canvasPong = document.getElementById("canvas_pong");
var n;
var pong

function onClick() {
    this.n = document.getElementById('input').value;
    this.pong= new Pong(document, canvasPong, 0, 0, n, '1');
    this.pong1= new Pong(document, canvasPong, 0, 0, n, '2');
    this.pong2= new Pong(document, canvasPong, 0, 0, n, '3');
    console.log(pong.name);
    console.log(pong1.name);
    console.log(pong2.name);
    context = this.canvasPong.getContext("2d");

    this.context.beginPath();
    this.context.moveTo(0,0);//this.context.height/2);
    this.context.lineTo(300,100);//this.context.height/2, this.context.height/2);
    this.context.stroke();
    draw();
}



function draw() {
    
    this.pong.draw();
    requestAnimationFrame(draw);
}