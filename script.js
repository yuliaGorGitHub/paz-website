
//  Array of Images
var backgroundImg=[ "images//250X110668568400.jpg",
					"images//banner_atar.jpg",
					"images//paz_250x110103131473.jpg",
					"images/250X110571325734.jpg"];

var element = document.getElementById('cl-pi');
var i = 0;
setInterval(function() 
{
	element.style.backgroundImage = "url(" + backgroundImg[i] + ")";
	i += 1;
	if (i == backgroundImg.length)
	{
		i =  0;
	}
}, 5000);

