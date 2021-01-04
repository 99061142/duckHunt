//Making the images a variable
var duck = document.getElementById("duckImage"); //Var for the duck hitbox
var background = document.getElementById("backgroundImage"); //Var for the background hitbox
//Variables for the margin of the duck(duck image)
var duckMarginTop = 250; 
var duckMarginLeft = 450;
//Variables for the hits/misses/ammo
var hitCounter = 1;
var missCounter = 1;
var gunAmmo = 0;


//Every 0.5 seconds the duck is changing margins
setInterval(function(){ 
  	direction(['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']);
}, 500);


//Says what the code must do if a direction is chosen
function direction(directions){
	//Choose a random direction every .5 seconds
	var moveDuck = directions[Math.floor(Math.random() * directions.length)];
	//Change the margin of the duck
	switch(moveDuck) {
		case "N":
			duckMarginTop = duckMarginTop - 75;
	    break;
	  	case "NE":
	   		duckMarginTop = duckMarginTop - 75;
	   		duckMarginLeft = duckMarginLeft + 75;
	    break;
	  	case "E":
	   		duckMarginLeft = duckMarginLeft + 75;
	    break;
	  	case "SE":
	    	duckMarginTop = duckMarginTop + 75;
	    	duckMarginLeft = duckMarginLeft + 75;
	    break;
	  	case "S":
	   		duckMarginTop = duckMarginTop + 75;
	    break;
	  	case "SW":
	    	duckMarginTop = duckMarginTop + 75;
	    	duckMarginLeft = duckMarginLeft -75;
	    break;
	  	case "W":
	   		duckMarginLeft = duckMarginLeft -75;
	    break;
	   	case "NW":
	    	duckMarginTop = duckMarginTop - 75;
	    	duckMarginLeft = duckMarginLeft -75;
	    break;
	}
	//Change the margins on the browser
	document.getElementById("duckImage").style.marginLeft = duckMarginLeft + "px";
	document.getElementById("duckImage").style.marginTop = duckMarginTop + "px";
}


//Changes the hit counter
duck.addEventListener("click", function(){ 
	document.getElementById("hit").innerHTML = "Hits: " + hitCounter++;
	gunAmmoCounter();
});
//Changes the miss counter
background.addEventListener("click", function(){
	document.getElementById("miss").innerHTML = "Misses: " + missCounter++;
	gunAmmoCounter();
});


//Change the browser if the ammo limit is reached
function gunAmmoCounter(){
	//Adds 1 gunAmmo every time you click on the background image or the duck
	gunAmmo++
	//If you did shoot 20 times you get a end screen
	if(gunAmmo >= 20){
		//Deletes the duck of the screen
		duck.style.display = "none"
		background.style.display = "none"
		//Replace the hit/miss counters with an end description and points
		miss.style.display = "none"
		document.getElementById("hit").innerHTML =
		"You dont have enough ammo to go further, this is your score:" + "<br>" +
		document.getElementById("hit").innerHTML + "<br>" + 
		document.getElementById("miss").innerHTML
		//Change the position of the description and points
		document.getElementById("hit").style.paddingTop = "25%"
		document.getElementById("hit").style.paddingLeft = "450px"
		//Stops the duck from moving
		clearInterval(fly);
	}
}
