function redirect(){
    window.location.replace("t.v.html");
}

function redirect1(){
    window.location.replace("fridge.html");
}

function redirect2(){
    window.location.replace("guitar.html");
}

function redirect3(){
    window.location.replace("closet.html");
}

function redirect4(){
    window.location.replace("dining_table.html");
}

function setup(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded")
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}