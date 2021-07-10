difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}
function modelLoaded(){
    console.log("PoseNet is initialised");
}
function draw(){
    background("lightblue");
    fill("yellow");
    textSize(difference);
    text("Uddhriti", 250,250);
    
}

function gotResult(results){
    if (results.length > 0){
    console.log(results);
    document.getElementById("square_size").innerHTML = "Width and Height of the square is = " + difference + "px";
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    }
}