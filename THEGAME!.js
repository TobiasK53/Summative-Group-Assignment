var song;
var xPositions = [100,200];
var name=["Nuumair","Yusuf","Moose","Tobiz","Matthew","Ali"];
var yPositions = [0,100];
var gameOver = 0;
var currentScene=0;
var stats;
var drawScene1 = function() {
   background(135, 50, 148); {
textSize(39);
fill(255, 0, 0);
text("Pro BR v1",108,54,314,50);

text("Pro BR v1",107,51,300,50);
}
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
rect(158, 114, 81, 42);  // the button
     // The button text
    fill(122, 17, 17);
    textSize(25);
    text("Start", 170, 143);
    image(getImage("avatars/leaf-red"), 289, 16, 59, 80);

};

draw = function() { 
    if (currentScene === 0) {
        drawScene1();
    }else if(currentScene===1){
    background(51, 90, 97);

    var rabbits = [];

var FRICTION = 0.2;
var HOP_SPEED = 3;
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 80;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(207, 85, 85);
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(255, 255, 255);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var Rabbit = function(x, y){
    this.x = x;
    this.y = y;
    this.name=name[floor(random(5))];
    this.speed = 0;
    this.angle = 90;
    this.steps = 0;
};

Rabbit.prototype.hop = function() {
    this.speed = HOP_SPEED;
};

Rabbit.prototype.update = function() {
    this.y -= this.speed;
    if(this.speed > 0){
        this.speed -= FRICTION;
    }
    else if(this.speed < 0){
        this.speed = 0;
    }
};

Rabbit.prototype.draw = function() {
    ellipseMode(CENTER);
    angleMode = "degrees";
    translate(this.x, this.y);
    rotate(-this.angle-90);
    fill(0, 0, 0);
    noStroke();
    ellipse(0, -7, 2, 5);
    fill(133, 16, 16);
    ellipse(0, 0, 10, 16);
    fill(184, 22, 22);
    ellipse(0, 6, 8, 9);
    fill(0, 0, 0);
    ellipse(0, 9, 6, 8);
    triangle(-3, 8, 0, 8, -1, -1);
    triangle(3, 8, 0, 8, 2, -1);
    fill(117, 15, 15);
    stroke(0, 0, 0);
    triangle(-1, 12, 1, 12, 0, 13);
    resetMatrix();
};

for (var i = 0; i < 4; i++) {
    rabbits.push(new Rabbit(50 + 100 * i, 300));
}

var btn1 = new Button({
    x: 350,
    y: 350,
    width: 50,
    height: 50,
    color: color(255, 132, 0),
    label: 'Tap!',
    onClick: function() {
        rabbits[3].hop();
    }
});

mouseClicked = function() {
    btn1.handleMouseClick();
};

draw = function() {
    background(98, 122, 54);
    //Draw the finish line
    rectMode(CORNER);
    stroke(0, 0, 0);
    for (var i = 0; i < width - 20; i += 40) {
        fill(0, 0, 0);
        rect(i, 20, 20, 20);
        rect(i + 20, 40, 20, 20);
        fill(255, 255, 255);
        rect(i+20, 20, 20, 20);
        rect(i, 40, 20, 20);
    }
    
    //Draw the racers
    for (var i = 0; i < rabbits.length; i++) {
        rabbits[i].update();
        rabbits[i].draw();
        
        if (i < 3 && frameCount % 15 === 0) {
            if (random(1) < 0.5) {
                rabbits[i].hop();
            }
        }
        
        if(rabbits[i].y<20){
            gameOver=1;
             //background
background(15, 112, 0);


textSize(37);
text(rabbits[i].name+" Has Defeated \n The Fire Bunnies", 193, 227);

//text("You Have Defeated \n The Fire Bunnies", 193, 227);
if(mouseIsPressed && mouseY<=200 && mouseY >=0){
        fill(189, 15, 15);
    }
rect(439,153,220,40);
textSize(67);
fill(43, 255, 0);
text("Winner!", 200, 150);
        }
    }
    
    //Draw the button
    btn1.draw();
};
    }else if (gameOver){
       
    }
};

    var mouseClicked = function() {
        xPositions.push(random(0,327));
        yPositions.push(random(0,371));
        currentScene++;
    };
    
