var drops = [];

function setup() {
   var width = $(window).width();
   var height = $(window).height();
   createCanvas(width, height);

   for (var i = 0; i < 500; i++) {
      drops[i] = new Drop();
   }
}
function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

function draw() {
   background(230, 230, 250);
   for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
   }
}
