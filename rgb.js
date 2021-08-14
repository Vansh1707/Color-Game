var colors = generaterandomcolors(numsqare);
var sqares = document.querySelectorAll(".sqare");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var numsqare = 6;

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsqare = 3;
	colors = generaterandomcolors(numsqare);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < sqares.length; i++) {
		if(colors[i]){
			sqares[i].style.background = colors[i];	
		}
		else{
			sqares[i].style.display = "none";
		}
		
	}
});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsqare = 6;
	colors = generaterandomcolors(numsqare);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < sqares.length; i++) {
		
			sqares[i].style.background = colors[i];	
			sqares[i].style.display = "block";
		}
		
	
});

resetbutton.addEventListener("click", function(){
	colors = generaterandomcolors(numsqare);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	this.textContent = "New Colors";
	messagedisplay.textContent = " ";
	for (var i = 0; i < sqares.length; i++) {
		sqares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colordisplay.textContent = pickedcolor;
for (var i = 0; i < sqares.length; i++) {
	sqares[i].style.background = colors[i];
	sqares[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedcolor){
			messagedisplay.textContent = "Correct";
			resetbutton.textContent = "Play Again";
			changecolors(clickedcolor);
			h1.style.background = clickedcolor;
		}
			else{
				this.style.background = "#232323";
				messagedisplay.textContent = "Try Again";
			}
		
	});
}

function changecolors(color){
	for (var i = 0; i < sqares.length; i++) {
		sqares[i].style.background = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generaterandomcolors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}