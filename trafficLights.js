let canvas = document.getElementById('canvas1');
canvas.width = '800';
canvas.height = '800';
canvas.style.border = "3px solid crimson";
canvas.style.backgroundColor = "2c2d2e";

let ctx = canvas.getContext("2d");

ctx.fillStyle = '#e0a714';
ctx.lineWidth= 3;

let fps = 60;
var startTime = Date.now();
let frameDuration = 1000/fps;
var loopStart = 0;

class trafficLight{
    constructor(startX, startY){
        this.startX = startX;
        this.startY = startY;

        this.red = '#420909';
        this.yellow = '#6e5e00';
        this.green = '#0b4002';
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        
        ctx.lineTo(this.startX, this.startY);
        ctx.lineTo(this.startX, this.startY + 50);
        ctx.lineTo(this.startX + 100, this.startY + 50);
        ctx.lineTo(this.startX, this.startY + 175);
        ctx.lineTo(this.startX, this.startY + 200);
        ctx.lineTo(this.startX + 100, this.startY + 200);
        ctx.lineTo(this.startX, this.startY + 325);
        ctx.lineTo(this.startX, this.startY + 350);
        ctx.lineTo(this.startX + 100, this.startY + 350);
        ctx.lineTo(this.startX, this.startY + 475);
        ctx.lineTo(this.startX, this.startY + 525);
    
        
        ctx.lineTo(this.startX - 175, this.startY + 525);
        ctx.lineTo(this.startX - 175, this.startY + 475);
        ctx.lineTo(this.startX - 275, this.startY + 350);
        ctx.lineTo(this.startX - 175, this.startY + 350);
        ctx.lineTo(this.startX - 175, this.startY + 325);
        ctx.lineTo(this.startX - 275, this.startY + 200);
        ctx.lineTo(this.startX - 175, this.startY + 200);
        ctx.lineTo(this.startX - 175, this.startY + 175);
        ctx.lineTo(this.startX - 275, this.startY + 50);
        ctx.lineTo(this.startX - 175, this.startY + 50);
        ctx.lineTo(this.startX - 175, this.startY - 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = this.red;
        ctx.lineWidth = 60;
        ctx.arc((this.startX + this.startX - 175) / 2, 
                (this.startY + 50 + this.startY + 175) / 2, 
                    30, 0, 2 * Math.PI);
        ctx.stroke();
    
        ctx.beginPath();
        ctx.strokeStyle = this.yellow;
        ctx.lineWidth = 60;
        ctx.arc((this.startX + this.startX - 175) / 2, 
                (this.startY + 200 + this.startY + 325) / 2, 
                    30, 0, 2 * Math.PI);
        ctx.stroke();
    
        ctx.beginPath();
        ctx.strokeStyle = this.green;
        ctx.lineWidth = 60;
        ctx.arc((this.startX + this.startX - 175) / 2, 
                (this.startY + 350 + this.startY + 475) / 2, 
                    30, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

var turnRed = 0;
var turnYellow = Date.now() + 3000;
var turnGreen = Date.now() + 6000;

function mainLoop(){
    requestAnimationFrame(mainLoop);
    startTime = Date.now();
    if (startTime >= loopStart){
        update();
        stoplight.draw();
        loopStart = startTime + frameDuration;

    }
}
5
function update(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (startTime > turnRed && startTime < turnYellow) {
        stoplight.green = '#0b4002';
        stoplight.yellow = '#6e5e00';
        stoplight.red = '#ed4242'; //on
        
    }
    if (startTime > turnYellow && startTime < turnGreen) {
        stoplight.green = '#0b4002';
        stoplight.red = '#420909';
        stoplight.yellow = '#ffed26'; //on
    }
    if (startTime > turnGreen && startTime < turnGreen + 3000) {
        stoplight.red = '#420909';
        stoplight.yellow = '#6e5e00';
        stoplight.green = '#8afc17'; //on
    }

    if (startTime > turnGreen + 3000) {
        turnRed = Date.now();
        turnYellow = Date.now() + 3000;
        turnGreen = Date.now() + 6000;
    }
}

let stoplight = new trafficLight(400 + 175 / 2, 400 - 525 / 2);

mainLoop();