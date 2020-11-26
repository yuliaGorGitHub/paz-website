
//  Array of Images
var backgroundImg=[ "images//250X110668568400.JPG",
					"images//banner_atar.JPG",
					"images//paz_250x110103131473.JPG",
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

