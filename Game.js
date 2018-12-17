fill(0, 0, 0);
textSize(20);
textAlign(CENTER);

//images of Leafers

var currentScene;

var drawScene1 =function(){
    currentScene = 1;
    background(200, 175, 175);
    text("Leafers started out as a seed",200,50);
    
};
var drawScene2 =function(){
    currentScene = 2;
    background(50, 167, 209);

    text("Leafers grows",201,50);
};
var drawScene3 =function(){
    currentScene = 3;
    background(156, 156, 224);
   
    text("Leafer is learning and becomeing strong",189,50);
};
var drawScene4 =function(){
    currentScene = 4;
    background(204, 12, 182);
    
    text("Leafer is now strong",214,50);
};
var drawScene5 =function(){
    currentScene = 5;
    background(199, 181, 108);
   
    text("In the end, Leafers became Ultimate Leafers",200,50);
};

drawScene1();

mouseClicked=function(){
 if(currentScene === 1) {
 drawScene2();
 }
else if(currentScene===2){
 drawScene3();    
}
else if(currentScene === 3) {
 drawScene4();

 }
else if(currentScene===4){
 drawScene5();    
}
else if(currentScene===5){
    drawScene1();
}
};

