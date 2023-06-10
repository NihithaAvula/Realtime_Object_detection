
status = "";
objects = [];

function preload(){
    
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

}

function draw(){
    image(video,0,0,400,400);
    if(status!=""){  
      objectDetector.detect(video, gotResult);
      r = random(255);
      g = random(255);
      b = random(255)
        for(var i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML = "status: Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :" + objects.length;
    fill(r,g,b);
    percentage = floor(objects[i].confidence*100);
    text(objects[i].label+" "+percentage+ "%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;

}

function gotResult(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}