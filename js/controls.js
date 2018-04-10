var forward = true;

function right() {
    if (keyCode === RIGHT_ARROW && forward) {
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
}

function left() {
    if (keyCode === LEFT_ARROW && forward) {
        if(axel.sprX < 181) {
            axel.sprX += 46;
            bg.x += 15;
        }
        else {
            forward = false;
        }
    }
    else if (keyCode === LEFT_ARROW  && !forward) {
        if(axel.sprX > 0) {
            axel.sprX -= 46;
            bg.x += 15;
        }
        else {
            forward = true;
        }
    }
    
}
