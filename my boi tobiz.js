var xPositions = [100,200];
var yPositions = [0,100];

var currentScene=0;

var drawScene1 = function() {
    //currentScene = 0;
    background(235, 247, 255);
    fill(0, 85, 255);
    textSize(39);
    text("The Story of Winston", 10, height/2);
};

draw = function() { 
    if (currentScene === 0) {
        drawScene1();
    }else if(currentScene===1){
    background(51, 90, 97);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(random(67,212));
        (random(7,22));
        (random(987,672));
        if(yPositions[i] > 435) {
            yPositions[i] = 9;
        }
        rect(xPositions[i], yPositions[i], 10, 11);
        yPositions[i] += random(1,80);
    }
    }else{
        background(255, 0, 0);
        text("The end",10,10,40,40);
    }
};

    var mouseClicked = function() {
        xPositions.push(random(0,327));
        yPositions.push(random(0,371));
        currentScene++;
    };
    
