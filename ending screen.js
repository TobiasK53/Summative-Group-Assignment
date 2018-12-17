//background
background(99, 13, 13);
//satan
image(getImage("avatars/piceratops-ultimate"), 310, 113, 97, 105);

textSize(23);
text("Better Luck Next Time!", 9, 208);
if(mouseIsPressed && mouseY<=200 && mouseY >=0){
        fill(189, 15, 15);
    }
rect(77,153,114,34);
textSize(18);
fill(255, 0, 0);
text("TRY AGAIN", 85, 177);
