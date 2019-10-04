alert("start!");
var mode = 0;
var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById("uwu");
canvas.setAttribute("width", ""+width);
canvas.setAttribute("height", ""+height);
canvas.setAttribute("onclick", "c.fillStyle='#ffffff';c.fillRect(0,0,"+width+", "+height+");mode++;mode=mode>2?0:mode;");
var c = canvas.getContext("2d");
c.textAlign = "center";
var mainRainbow = c.createLinearGradient(0, 0, width, 0);
mainRainbow.addColorStop(0,"#f00");
mainRainbow.addColorStop(0.2,"#f80");
mainRainbow.addColorStop(0.4,"#ff0");
mainRainbow.addColorStop(0.6,"#0f0");
mainRainbow.addColorStop(0.8,"#00f");
mainRainbow.addColorStop(1,"#f0f");
setInterval(function(){
	var pSize = Math.round(Math.random()*width/2);
	for(var smol = 4; smol > 0; smol--){
		var pSize = Math.round(Math.random()*pSize);
	}
	var x = Math.random()*width;
	var y = Math.random()*height;
	var rainbow = c.createLinearGradient(x-pSize,y,x+pSize,y);
	switch(mode){
		case 0:
			c.fillStyle="#000000";
			break;
		case 1:
			c.fillStyle = mainRainbow;
			break;
		case 2:
			rainbow.addColorStop(0,"#f00");
			rainbow.addColorStop(0.2,"#f80");
		  rainbow.addColorStop(0.4,"#ff0");
		  rainbow.addColorStop(0.6,"#0f0");
		  rainbow.addColorStop(0.8,"#00f");
		  rainbow.addColorStop(1,"#f0f");
		  c.fillStyle = rainbow;
      break;
  }
  c.font = pSize+"px Cursive";
  var text=Math.random()<0.5?"UwU":"OwO";
  c.fillText(text, x, y);
}, 10);
