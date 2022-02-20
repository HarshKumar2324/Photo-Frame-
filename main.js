function preload(){

}

function setup(){
    canvas=createCanvas(300, 300,);
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    }

    function draw(){
        image(video,0,0,300,300);
        circle(35, 30, 40);
        rect(55, 15, 190, 30, 20);
        circle(265, 30, 40);
        rect(245, 50, 40, 190, 20, 15, 10, 5);
        circle(265, 260, 40);
        rect(55, 245, 190, 30, 20);
        circle(35, 260, 40);
        rect(15, 50, 40, 190, 20, 15, 10, 5);

    }

    function take_snapshot(){
        save("picture_frame.png");
    }
