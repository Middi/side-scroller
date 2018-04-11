var bg = {
    x: 0,
    y: 0
};

var axel = {
    x: 750,
    y: 600,
    sprX: 0,
    sprY: 0,
};

var turned = false;

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
    turn();
    image(axel.img, axel.x, axel.y, 180, 324, axel.sprX, axel.sprY, 45, 81);
    fill(255);
    textSize(40);
    text(axel.x, 100, 130);
    controls();
}

