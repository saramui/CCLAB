let C4;
let Db4;
let D4;
let Eb4;
let E4;
let F4;
let Gb4;
let G4;
let Ab4;
let A4;
let Bb4;
let B4;
let C5;
let shapes = [];
let bg;
let clear;

function preload(){
  C4 = loadSound("piano/C4.mp3");
  Db4 = loadSound("piano/Db4.mp3");
  D4 = loadSound("piano/D4.mp3");
  Eb4 = loadSound("piano/Eb4.mp3");
  E4 = loadSound("piano/E4.mp3");
  F4 = loadSound("piano/F4.mp3");
  Gb4 = loadSound("piano/Gb4.mp3");
  G4 = loadSound("piano/G4.mp3");
  Ab4 = loadSound("piano/Ab4.mp3");
  A4 = loadSound("piano/A4.mp3");
  Bb4 = loadSound("piano/Bb4.mp3");
  B4 = loadSound("piano/B4.mp3");
  C5 = loadSound("piano/C5.mp3");
}

function setup(){
  createCanvas(windowWidth-10,windowHeight);
  background(0);
  if(bg==true){
    background(0);
  }
}

function draw(){
  if(bg == false){
    background(0);
  }
  if(keyIsPressed == true){
    shapes.push(new shape());
    for(let i=0; i<shapes.length;i++){
      let s=shapes[i];
      s.update();
      s.display();
      s.done();
    }
    for(let i = shapes.length-1;i>0;i--){
      let s=shapes[i];
      if(s.delete == true){
        shapes.splice(i,1);
      }
    }
  }
}

function bkgd(){
  bg = false;
}
function noBkgd(){
  bg = true;
}

function keyPressed(){
  if(keyCode == 87){
    C4.play();
  }
  if(keyCode == 51){
    Db4.play();
  }
  if(keyCode == 69){
    D4.play();
  }
  if(keyCode == 52){
    Eb4.play();
  }
  if(keyCode == 82){
    E4.play();
  }
  if(keyCode == 84){
    F4.play();
  }
  if(keyCode == 54){
    Gb4.play();
  }
  if(keyCode == 89){
    G4.play();
  }
  if(keyCode == 55){
    Ab4.play();
  }
  if(keyCode == 85){
    A4.play();
  }
  if(keyCode == 56){
    Bb4.play();
  }
  if(keyCode == 73){
    B4.play();
  }
  if(keyCode == 79){
    C5.play();
  }
}

class shape{
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.opacity=255;
    this.delete= false;
    this.dia=20;
    this.key=keyCode;
    this.r=0;
    this.g=0;
    this.b=0;
  }
  done(){
    if(this.opacity < 0){
      this.delete = true;
    }
  }
  update(){
    this.dia += 5;
    this.opacity -= 10;
    if(keyCode == 87){
      this.r=255;
      this.g=0;
      this.b=0;
    }
    if(keyCode == 51){
      this.r=204;
      this.g=153;
      this.b=255;
    }
    if(keyCode == 69){
      this.r=255;
      this.g=255;
      this.b=0;
    }
    if(keyCode == 52){
      this.r=102;
      this.g=102;
      this.b=255;
    }
    if(keyCode == 82){
      this.r=255;
      this.g=255;
      this.b=255;
    }
    if(keyCode == 84){
      this.r=102;
      this.g=51;
      this.b=0;
    }
    if(keyCode == 54){
      this.r=0;
      this.g=255;
      this.b=255;
    }
    if(keyCode == 89){
      this.r=255;
      this.g=128;
      this.b=0;
    }
    if(keyCode == 55){
      this.r=255;
      this.g=0;
      this.b=255;
    }
    if(keyCode == 85){
      this.r=0;
      this.g=255;
      this.b=0;
    }
    if(keyCode == 56){
      this.r=128;
      this.g=128;
      this.b=128;
    }
    if(keyCode == 73){
      this.r=0;
      this.g=0;
      this.b=255;
    }
    if(keyCode == 79){
      this.r=0;
      this.g=153;
      this.b=153;
    }
  }
  display(){
    noStroke();
    fill(this.r,this.g,this.b,this.opacity)
    circle(this.x, this.y,this.dia);
  }
}
