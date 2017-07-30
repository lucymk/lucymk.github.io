var yAxis = 0;
var speed = 15;
var move = null;

window.onscroll = function(){
	yAxis = this.pageYOffset;	
};

function goToTop(){
	move = setTimeout(function(){
		goToTop();
	}, 1);

	yAxis = yAxis - speed;

	if(yAxis <= 0){
		clearTimeout(move);
	}	

	window.scroll(0, yAxis);
}
