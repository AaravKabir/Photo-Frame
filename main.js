function setup(){
    canvas=createCanvas(620,420);
    canvas.position(230,270);
    photo="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg"
    video= createCapture(VIDEO);
    video.hide();
    }
    function preload(){
    
    }
    
    function draw(){
        image(video,0,0,680,420);
        rect(25, 40, 40, 320);
        rect(580, 40, 40, 320);
        rect(25, 25, 580, 40);
        rect(25, 360, 580, 40);
        fill(0,0,200);

        circle(45, 45, 50,);
        circle(600, 45, 50,);
        circle(45, 370, 50,);
        circle(600, 370, 50,);
        fill(200,0,0);
        


        
        
       
    }
    function takeSnapshot(){
        save("AaravColorImage.png");
    }
  
