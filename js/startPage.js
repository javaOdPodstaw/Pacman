
function displayNextImage(){
	document.getElementById("img").src = 'img/closed1.jpg';
	
}
function displayPreviousImage(){
	document.getElementById("img").src = 'img/open1.jpg';
}

function startTimer() {
              setInterval(displayNextImage, 500);
}

function startTimer1() {
              setInterval(displayPreviousImage, 400);
}


startTimer1();
startTimer();