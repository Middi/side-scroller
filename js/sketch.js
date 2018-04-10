var bg = {
    x: 0,
    y: 0 
};

var axel = {
    x: 422,
    y: 600,
    sprX: 0,
    sprY: 0
};

function preload() {
    bg.img = loadImage('../img/back.jpg');
    axel.img = loadImage('../img/sprite.png');
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
}

function draw() {
    background(200);
    image(bg.img, bg.x, bg.y, windowHeight*5, windowHeight);
    image(axel.img, axel.x, axel.y, 180, 324, axel.sprX, axel.sprY, 43, 81);
    fill(255);
    textSize(40);
    text(axel.sprX, 100, 130);
}


var forward = true;

function keyPressed() {


        if (keyCode === RIGHT_ARROW) {
                axel.sprX += 46;
                bg.x -= 15;
        }
        // else if (keyCode === RIGHT_ARROW  && !forward) {
        //     if(axel.sprX > 0) {
        //         axel.sprX -= 46;
        //         bg.x -= 15;
        //     }
        //     else {
        //         forward = true;
        //     }
        // }
 
    
        if (keyCode === LEFT_ARROW) {
            if(axel.sprX < 181) {
                axel.sprX += 46;
                bg.x += 15;
            }
            
        }
        else if (keyCode === LEFT_ARROW) {
            if(axel.sprX > 0) {
                axel.sprX -= 46;
                bg.x += 15;
            }
           
        }
        

    
    
}
