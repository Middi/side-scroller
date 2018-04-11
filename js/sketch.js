var bg = {
    x: 0,
    y: 0
};

var axel = {
    x: 700,
    y: 540,
    sprX: 0,
    sprY: 0,
    jumping: false,
    velX: 0,
    velY: 0
};

var turned = false;
var jumping = false;
var jumpCount = 0;


function preload() {
    bg.img = loadImage('../img/back.jpg');
    axel.img = loadImage('../img/sprite.png');
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    frameRate(30);
}

function draw() {
    background(200);
    image(bg.img, bg.x, bg.y, windowHeight * 5, windowHeight);
    fill(255);
    textSize(40);
    text(axel.y, 100, 130);
    turn();
    image(axel.img, axel.x, axel.y, 162, 291.6, axel.sprX, axel.sprY, 45, 81);
    if(jumping) {
        jump();
    }
    controls();
}

// Jump
function keyPressed() {
    if(keyCode === 32) {
        jumping = true;
    }
}
