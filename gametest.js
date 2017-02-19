document.addEventListener('DOMContentLoaded', myLoadFunction);

function myLoadFunction()
{
  var element = document.getElementById('start');
  element.addEventListener('click', move);
  //timeout = setInterval(move, 10);
	//document.addEventListener('keydown', keydown);
	//document.addEventListener('keyup', keyup);
}

function move()
{
	var player = document.getElementById('horse1'); //testing
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	player.style.left = positionLeft+1 + 'px'; //testing
}
