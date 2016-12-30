(function(){

	var width;
	var	height
	var	page1;
	var	canvas;
	var	ctx;
	var	circles;
	var	target;
	var	animatePage = true;

	initPage1()
	

	function initPage1() {
		width = window.innerWidth;
		height = window.innerHeight;
		target = {x:0, y:height};

		page1 = $('bb-custom-firstpage')

		canvas = document.getElementById('canvas');
		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext('2d');

		//particles
		circles = [];
		for (var x=0; x< width*0.9; x++) {
			var c = new Circle();
			circles.push(c);
		}
		animate();
	}



function scrollCheck(){
	if(document.body.scrollTop > height) animatePage = false;
	else animatePage = true;
}
function resize(){
	window = window.innerWidth;
	height = window.innerHeight;
	page1.style.height = height+ 'px';
	canvas.width = width;
	canvas.height = height;
}


function animate(){
	if(animatePage){
		ctx.clearRect(0,0,width,height);
		for(var i in circles){
			circles[i].draw();
		}
	}
	requestAnimationFrame(animate);
}

	//canvas manipulation
	function Circle(){
		var _this = this;

	//constructor
	(function(){
		_this.pos = {};
		init();
		console.log(_this);
	})();

	function init() {
		_this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*500;
            _this.alpha = 1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
	}

	this.draw = function() {
		if(_this.alpha<=0){
			init();
		}
		_this.pos.y -= _this.velocity;
        _this.alpha -= 0.0005;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
        ctx.fill();
	};

	}

})();

(function($){
	var title = $('#title');
	TweenLite.from(title, 2, {x:-200, ease:Power1.easeOut});
})(jQuery);

(function($){
	var joaquin = $('#joaquin');
	TweenLite.fromTo(joaquin, 3, {y:-400}, {y:0});
})(jQuery);

jQuery(document).ready(function() {
  checkContainer();
  checkContainer2()
  checkContainer3()
  
});

	
	function checkContainer () {

  if($('#joaquin2').is(':visible')){ 
    TweenLite.fromTo(joaquin2, 3, {y:400}, {y:180});  
  } else {
    setTimeout(checkContainer, 50); 
  }
}

function checkContainer2(){
	if($('#joaquin3').is(':visible')){ 
    TweenLite.from(joaquin3, 2, {autoAlpha:0, delay:1});  
  } else {
    setTimeout(checkContainer2, 50); 
  }
}

function checkContainer3(){
	if($('#joaquin4').is(':visible')){ 
    TweenLite.from(joaquin4, 2, {autoAlpha:0, delay:1});  
  } else {
    setTimeout(checkContainer3, 50); 
  }
}



window.onload = function(){
	//canvas init
	var canvas3 = document.getElementById("canvas3");
	var ctx2 = canvas3.getContext("2d");
	
	//canvas dimensions
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas3.width = W;
	canvas3.height = H;
	
	//snowflake particles
	var mp = 25; //max particles
	var particles = [];
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*4+1, //radius
			d: Math.random()*mp //density
		})
	}
	
	//Lets draw the flakes
	function draw()
	{
		ctx2.clearRect(0, 0, W, H);
		
		ctx2.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx2.beginPath();
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			ctx2.moveTo(p.x, p.y);
			ctx2.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx2.fill();
		update();
	}
	
	//Function to move the snowflakes
	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			//Sending flakes back from the top when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						//Enter from the right
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 33);
}



