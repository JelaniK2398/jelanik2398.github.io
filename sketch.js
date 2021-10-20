var screen1;
var screen2;
var screen3;
var screen4;
var screen5;
var screen6;
var screen7;
var screen8;
var screen9;
var screen10;
var screen11;
var screen12;
var screen13;
var screen14;
var screen15;
var screen16;
var screen17;
var screen18;
var screen19;
var screen20;
var screen21;
var screen22;
var mode;
var xloc;
var yloc;


//let array = ['StevenBradley', 'counselor2021',];


function preload() {
   screen1 = loadImage('assets/screen1.png');
   screen2 = loadImage('assets/screen2.png');
   screen3 = loadImage('assets/screen3.png');
   screen4 = loadImage('assets/screen4.png');
   screen5 = loadImage('assets/screen5.png');
   screen6 = loadImage('assets/screen6.png');
   screen7 = loadImage('assets/screen7.png');
   screen8 = loadImage('assets/screen8.png');
   screen9 = loadImage('assets/screen9.png');
   screen10 = loadImage('assets/screen10.png');
   screen11 = loadImage('assets/screen11.png');
   screen12 = loadImage('assets/screen12.png');
   screen13 = loadImage('assets/screen13.png');
   screen14 = loadImage('assets/screen14.png');
   screen15 = loadImage('assets/screen15.png');
   screen16 = loadImage('assets/screen16.png');
   screen17 = loadImage('assets/screen17.png');
   screen18 = loadImage('assets/screen18.png');
   screen19 = loadImage('assets/screen19.png');
   screen20 = loadImage('assets/screen20.png');
   screen21 = loadImage('assets/screen21.png');
   screen22 = loadImage('assets/screen22.png');
}


function setup(){
  createCanvas(320,660);
  mode = 0;


}

function draw(){
  background(128);
  if (mode == 0){
  image(screen1, 0, 0);
  screen1.resize (320,0);
} else if (mode == 1) {
  screen2.resize(320,0);
  image(screen2, 0, 0);
} else if (mode == 2) {
  screen3.resize(320,0);
  image(screen3, 0, 0);
} else if (mode == 3) {
  screen4.resize (320,0);
  image(screen4, 0, 0);
} else if (mode == 4) {
  screen5.resize (320,0);
  image(screen5, 0, 0);
} else if (mode == 5) {
  screen6.resize (320,0);
  image(screen6, 0, 0);
} else if (mode == 6) {
  screen7.resize (320,0);
  image(screen7, 0, 0);
} else if (mode == 7) {
  screen8.resize (320,0);
  image(screen8, 0, 0);
} else if (mode == 8) {
  screen9.resize (320,0);
  image(screen9, 0, 0);
} else if (mode == 9) {
  screen10.resize (320,0);
  image(screen10, 0, 0);
} else if (mode == 10) {
  screen11.resize (320,0);
  image(screen11, 0, 0);
} else if (mode == 11) {
  screen12.resize (320,0);
  image(screen12, 0, 0);
} else if (mode == 12) {
  screen13.resize (320,0);
  image(screen13, 0, 0);
} else if (mode == 13) {
  screen14.resize (320,0);
  image(screen14, 0, 0);
} else if (mode == 14) {
  screen15.resize (320,0);
  image(screen15, 0, 0);
} else if (mode == 15) {
  screen16.resize (320,0);
  image(screen16, 0, 0);
} else if (mode == 16) {
  screen17.resize (320,0);
  image(screen17, 0, 0);
} else if (mode == 17) {
  screen18.resize (320,0);
  image(screen18, 0, 0);
} else if (mode == 18) {
  screen19.resize (320,0);
  image(screen19, 0, 0);
} else if (mode == 19) {
  screen20.resize (320,0);
  image(screen20, 0, 0);
} else if (mode == 20) {
  screen21.resize (320,0);
  image(screen21, 0, 0);
} else if (mode == 21) {
  screen22.resize (320,0);
  image(screen22, 0, 0);
}
}



function mousePressed(){
if (mode == 0 && mouseX<150 && mouseY>150) {
    mode = 1;
  } else if (mode == 1 && mouseX<50 && mouseX<180) {
     mode = 2;
  } else if (mode == 2 && mouseX<100 && mouseX<220) {
    mode = 3;
  } else if (mode == 3 && mouseX>100 && mouseX<220) {
    mode = 4;
  } else if (mode == 4 && mouseX>100 && mouseX<220) {
    mode = 5;
  } else if (mode == 5 && mouseX>100 && mouseX<220) {
    mode = 6;
  } else if (mode == 6 && mouseX>100 && mouseX<220) {
    mode = 7;
  } else if (mode == 7 && mouseX>100 && mouseX<220) {
    mode = 8;
  } else if (mode == 8 && mouseX>100 && mouseX<220) {
    mode = 9;
  } else if (mode == 9 && mouseX>150 && mouseX<220) {
    mode = 10;
  } else if (mode == 10 && mouseX>150 && mouseX<250) {
    mode = 11;
  } else if (mode == 11 && mouseX>100 && mouseX<220) {
    mode = 12;
  } else if (mode == 12 && mouseX>100 && mouseX<220) {
    mode = 13;
  } else if (mode == 13 && mouseX>100 && mouseX<220) {
    mode = 14;
  } else if (mode == 14 && mouseX>100 && mouseX<220) {
    mode = 15;
  } else if (mode == 15 && mouseX>100 && mouseX<220) {
    mode = 16;
  } else if (mode == 16 && mouseX>100 && mouseX<220) {
    mode = 17;
  } else if (mode == 17 && mouseX>100 && mouseX<200) {
    mode = 18;
  } else if (mode == 18 && mouseX>100 && mouseX<200) {
    mode = 19;
  } else if (mode == 19 && mouseX>100 && mouseX<220) {
    mode = 20;
  } else if (mode == 20 && mouseX>100 && mouseX<220) {
    mode = 21;
  } else if (mode == 21 && mouseX>100 && mouseX<220) {
    mode = 22;
  }


  }
