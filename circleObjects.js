let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext("2d");

canvas.width = innerWidth;

let fps = 60;
var startTime = Date.now();
let frameDuration = 1000/fps;
var loopStart = 0;

class Circle {
    constructor(x, y, startCircle, circum, dStartCircle, color){
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.startCircle = startCircle;
        this.circum = circum;
        this.color = color;
        this.dStartCircle = dStartCircle;
    }
    
    draw(){
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startCircle, this.circum);
        ctx.lineWidth = this.radius * 2;
        ctx.stroke();
    }
}

let circle1 = new Circle(350, 250, 3 * Math.PI / 2, 3 * Math.PI / 2,  (Math.PI) * 4 / 300, 'aquamarine');
let circle2 = new Circle(960, 250, 3 * Math.PI / 2, 3 * Math.PI / 2,  (Math.PI) * 4 / 300, 'blueviolet');
let circle3 = new Circle(1570, 250, 3 * Math.PI / 2, 3 * Math.PI / 2,  (Math.PI) * 4 / 300, 'crimson');

function update(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circle1.startCircle += circle1.dStartCircle;

    if (circle2.circum > 3 * Math.PI / 2){
        circle2.circum = -Math.PI / 2;
    }
    circle2.circum += circle2.dStartCircle;

    if (circle3.startCircle < -Math.PI / 2){
        circle3.startCircle = 3 * Math.PI / 2;
    }
    circle3.startCircle -= circle3.dStartCircle;
}

function mainLoop(){
    requestAnimationFrame(mainLoop);
    startTime = Date.now();
    if (startTime >= loopStart){
        update();
        circle1.draw();
        circle2.draw();
        circle3.draw();
        loopStart = startTime + frameDuration;

    }
}

mainLoop();