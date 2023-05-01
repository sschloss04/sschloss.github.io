// Color palette:
// rgb(207, 240, 158)
// rgb(168, 219, 168) <-- background
// rgb(121, 189, 154) <-- main color?
// rgb(59, 134, 134)
// rgb(11, 72, 107) <--accent

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}
function backgroundStars(){
  
  totalWidth = 60; //width of the shape + boarder
  totalHeight = 70;
  for(y = 0; y<window.innerHeight; y += totalHeight){
    for(x = 0; x<window.innerWidth; x += totalWidth){
      //fill(11, 72, 107)
      fill(219, 216, 2);
      //noStroke();
      stroke(0);
      beginShape();
      blpit = vertex(14+x,28+y);
      bp = vertex(21+x,42+y);
      brpit = vertex(28+x,28+y);
      rp = vertex(42+x,21+y);
      trpit = vertex(28+x,14+y);
      tp = vertex(21+x,0+y);
      tlpit = vertex(14+x,14+y);
      lp = vertex(0+x,21+y);
      last = vertex(14+x,28+y);

      endShape();
    }
  }
 
}
function draw() {
  clear();
  background(168,219,168);
  backgroundStars();
  rectMode(CENTER);
  stroke(0);
  strokeWeight(4);
  fill(58, 156, 156);
        // 121, 189, 154
  rect(window.innerWidth/3, window.innerHeight/3, 250,250,20);
  fill(58, 156, 156);
  rect(2*window.innerWidth/3, window.innerHeight/3, 250,250,20);
  fill(58, 156, 156);
  rect(window.innerWidth/2, 2*window.innerHeight/3, 575,250,20);
  noLoop();
}