var marginY = 0;
var destination = 0;
var speed = 15;
var scroller = null;



window.onscroll = function(){
	marginY = this.pageYOffset;	
};

function toTop(){
	scroller = setTimeout(function(){
		toTop();
	}, 1);

	marginY = marginY - speed;

	if(marginY <= 0){
		clearTimeout(scroller);
	}	

	window.scroll(0, marginY);
}
