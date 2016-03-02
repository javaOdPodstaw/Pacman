
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



function makeCenterTable(){
	
	document.getElementById("pacmanTitle").style.textAlign = "center";
	document.getElementById("table").style.margin = "auto";
	document.getElementById("table").style.padding = "5px";
	document.getElementById("pacmanButton").style.textAlign = "center";
	

}

makeCenterTable();




