function controls() {

    // Walk Right
    if (keyIsDown(RIGHT_ARROW) && axel.sprX < 225 && frameCount % 4 == 0) {
        turned = false;
        axel.sprX += 45;
        bg.x -= 32;
    } else if (keyIsDown(RIGHT_ARROW) && axel.sprX >= 225 && frameCount % 4 == 0) {
        turned = false;
        axel.sprX = 0;
        bg.x -= 27;
    }


    // Walk Left
    if (bg.x <= -32) {
        if (keyIsDown(LEFT_ARROW) && axel.sprX < 225 && frameCount % 4 == 0) {
            turned = true;
            axel.sprX += 45;
            bg.x += 32;
        } else if (keyIsDown(LEFT_ARROW) && axel.sprX >= 225 && frameCount % 4 == 0) {
            turned = true;
            axel.sprX = 0;
            bg.x += 32;
        }
    }


}


function turn() {
    if (turned) {
        translate(width - 100, 0);
        scale(-1.0, 1.0);
    }
}

function jump() {
    if(axel.y > 540) {
        jumpCount = 0;
        jumping = false;
    }
    
    axel.y = 0.981*sq(jumpCount)/2 - 28*jumpCount + 540;
    jumpCount++;
}