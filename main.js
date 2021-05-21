function preload(){

}
function draw(){
    image(video,0,0,250,250);

    
}
function setup(){
    var canvas=createCanvas(300,300);
    canvas.center();
   video=createCapture(VIDEO);
   video.size(250,250);
   video.hide(); 
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on("pose",gotPoses);
   
}
function Take_snapshot(){
    save("Arnav.png");

}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(results){
    if(results.length >0)
    {
        console.log(results) ;
        console.log("Leftear x= "+results[0].pose.leftEar.x);
        console.log("Leftear y= "+results[0].pose.leftEar.y);
    }
    
}

