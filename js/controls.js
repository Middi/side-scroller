function controls() {

    // Walk Right
    if (keyIsDown(RIGHT_ARROW) && axel.sprX < 225 && frameCount % 4 == 0) {
        turned = false;
        axel.sprX += 45;
        bg.x -= 27;
    }

    else if (keyIsDown(RIGHT_ARROW) && axel.sprX >= 225 && frameCount % 4 == 0) {
        turned = false;
        axel.sprX = 0;
        bg.x -= 27;
    }


    // Walk Left
    if (bg.x <= -27) {
        if (keyIsDown(LEFT_ARROW) && axel.sprX < 225 && frameCount % 4 == 0) {
            turned = true;
            axel.sprX += 45;
            bg.x += 27;
        }

        else if (keyIsDown(LEFT_ARROW) && axel.sprX >= 225 && frameCount % 4 == 0) {
            turned = true;
            axel.sprX = 0;
            bg.x += 27;
        }
    }

    // Jump
    if (keyIsDown(' ') && frameCount % 4 == 0) {
        axel.sprX += 45;
        bg.x += 27;
    }
}

function turn() {
    if (turned){
        translate(width,0);
        scale(-1.0,1.0); 
    }
}