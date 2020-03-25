var temp;
var visible = false;

function left_animate(div) {
	if(visible == false){
		$('#page').animate({
			marginLeft :  "600px",
		});
		$('#shadow').toggle();
		$('#l-button').toggle();
		$('#' + div).toggle();
    		temp = div;
			visible = true;
	}
	else{
		$('#page').animate({
			'marginLeft' :  "0px"
		});
		$('#shadow').toggle();
		$('#l-button').toggle();
		$('#page').promise().done(function(){
			$("#" + temp).toggle();
		});
		visible = false;
	}
}

function right_animate(div) {
	var menuMove = $(window).width() - 600;
	if(visible == false){
		$('#page').animate({
			'marginLeft' :  "-600px"
		});
		$('#main-menu').animate({
			'marginLeft' :  menuMove + "px"
		});
		$('#shadow').toggle();f
		$('#r-button').toggle();
		$('#' + div).toggle();
		temp = div;
		visible = true;
	}
	else{
		$('#page').animate({
			'marginLeft' :  "0px"
		});
		$('#main-menu').animate({
			'marginLeft' :  "0px"
		});
		$('#shadow').toggle();
		$('#r-button').toggle();
		$('#page').promise().done(function(){
			$("#" + temp).toggle();
		});
		visible = false;
	}
}

function full_photo(photo) {
	$('#sheet').toggle();
	document.getElementById("sheetimg").src="gallery/img" + photo + ".jpg";
}