//Background
background(135, 50, 148); {
textSize(39);
fill(255, 0, 0);
text("Pro BR v1",108,54,314,50);

text("Pro BR v1",107,51,300,50);
}
//Hills
noStroke();
fill(189, 47, 47);
ellipse(48,465,345,345);
ellipse(196,427,295,295);
ellipse(287,439,295,295);
ellipse(421,427,295,295);
 //Trees
fill(122, 87, 0);
rect(50,323,10,28);
rect(100,356,10,28);
rect(172,310,10,28);
rect(229,335,10,28);
rect(316,316,10,28);
fill(255,0,0);
ellipse(55,316,25,25);
ellipse(105,351,25,25);
ellipse(177,303,25,25);
ellipse(234,328,25,25);
ellipse(320,306,25,25);
 //Button Design
draw = function() {
    fill(212, 159, 0); // start color
    if(mouseIsPressed && mouseY<=200 && mouseY >=0){
        fill(189, 15, 15);
    }
    rect(158, 114, 81, 42);  // the button
     // The button text
    fill(122, 17, 17);
    textSize(25);
    text("Start", 170, 143);
};
image(getImage("avatars/leaf-red"), 289, 16, 59, 80);
