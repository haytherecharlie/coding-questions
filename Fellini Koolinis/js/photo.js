
var currentPhoto;
var leftOne;
var rightOne;

function photoLeft() {
    currentPhoto = $('#photophoto').css('background-image');
    currentPhoto = currentPhoto.substring((currentPhoto.length - 7) , currentPhoto.length-5);
    currentPhoto = parseInt(currentPhoto);
    leftOne = currentPhoto - 1;
    leftOne = leftOne < 10 ? "0" + leftOne : leftOne;

    if(leftOne == 00 ){
    	$('#photophoto').css('background-image', 'url(gallery/13.jpg)');
    }
    else{
    	$('#photophoto').css('background-image', "url(gallery/" + leftOne + ".jpg)");
    }

}

function photoRight() {
    currentPhoto = $('#photophoto').css('background-image');
    currentPhoto = currentPhoto.substring((currentPhoto.length - 7) , currentPhoto.length-5);
    currentPhoto = parseInt(currentPhoto);
    rightOne = currentPhoto + 1;
    rightOne = rightOne < 10 ? "0" + rightOne : rightOne;

    if(rightOne == 13 ){
    	$('#photophoto').css('background-image', 'url(gallery/01.jpg)');
    }
    else{
    	$('#photophoto').css('background-image', "url(gallery/" + rightOne + ".jpg)");
    }

}