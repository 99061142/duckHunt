var duck = document.getElementById("duck");  //Var voor de image
var direction = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];  //Var voor de directie
var background = document.getElementById("background");

//Puntenteller
var hitcounter = 0;
var misscounter = 0;
var totalscore = 0;


//De functie pakt iedere halve seconde een directie 
function randomdirection(){
	var randomdirection = direction[Math.floor(Math.random() * direction.length)];
}
setInterval(randomdirection, 500)


if(randomdirection = "N"){

}

else if(randomdirection = "NE"){

}

else if(randomdirection = "E"){

}

else if(randomdirection = "SE"){

}

else if(randomdirection = "S"){

}

else if(randomdirection = "SW"){

}

else if(randomdirection = "W"){

}

else if(randomdirection = "NW"){

}


duck.addEventListener("click", function(){
	hitcounter = hitcounter + 1;
});
background.addEventListener("click", function(){
	misscounter = misscounter + 1;
});













