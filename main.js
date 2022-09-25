leftX = 0;
rightX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResult);
}

function modelLoaded() {
    console.log("Posenet is loaded");
}

function draw() {
    background("grey");
    textsize(difference);
    fill("blue");
    text("Sandhya Sudhamsu Srimathirumala Pallerlamudi", 20, 20)
}

function gotResult(results) {
    if(results.length > 0) {
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        difference = floor(leftX - rightX);
        console.log(difference);
    }
}