var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  console.log('entering setup')
  createCanvas(400, 400);  
  btn_red = createButton("RED");
  btn_red.position(50,100)
  btn_red.mousePressed(redbutton)
  btn_green = createButton("GREEN");
  btn_green.position(280,100)
  btn_green.mousePressed(greenbutton)
 
  
}

function draw(){
  background(r,g,b);
}
function redbutton(btn_red,mouse) {
  r  = 255;
  g = 0 ;
  b = 0;
  
}
function greenbutton(btn_green,mouse) {
  r  = 0;
  g = 255;
  b = 0;
  
}