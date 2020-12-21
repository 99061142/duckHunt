//Making the images a variable
var duck = document.getElementById("duckImage"); //Var for the duck hitbox
var background = document.getElementById("backgroundImage"); //Var for the background hitbox
//Variables for the margin of the duck
var duckMarginTop = 250; 
var duckMarginLeft = 450;
//Variables for the hits/misses/ammo
var hitCounter = 1;
var missCounter = 1;
var gunAmmo = 0;


//Every 1.5 seconds the duck is changing margins
var fly = setInterval(() => {
	direction(['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']);
}, 1500);


direction = directions =>{
	let moveDuck = directions[Math.floor(Math.random () * directions.length)];
	switch(moveDuck) {
		case "N":
			duckMarginTop = duckMarginTop - 75;
	    break;
	  	case "NE":
	   		duckMarginTop = duckMarginTop - 75;
	   		duckMarginLeft = duckMarginLeft + 75
	    break;
	  	case "E":
	   		duckMarginLeft = duckMarginLeft + 75
	    break;
	  	case "SE":
	    	duckMarginTop = duckMarginTop + 75
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
	//Calculate the margin and change it in the browser
	document.getElementById("duckImage").style.marginTop = duckMarginTop + "px";
	document.getElementById("duckImage").style.marginLeft = duckMarginLeft + "px";
}

duck.addEventListener("click", function(){ //Changes the hit counter and decrease your ammo 
	document.getElementById("hit").innerHTML = "Hits: " + hitCounter++;
	gunAmmoCounter();
});
background.addEventListener("click", function(){ //Changes the miss counter and decrease your ammo
	document.getElementById("miss").innerHTML = "Misses: " + missCounter++;
	gunAmmoCounter();
});


function gunAmmoCounter(){
	gunAmmo++
	if(gunAmmo >= 3){
		//Deletes the duck of the screen
		duck.style.display = "none"
		//Replace the hit/miss counters with an end description and points
		miss.style.display = "none"
		document.getElementById("hit").innerHTML =
		"Your dont have enough ammo to go further. This is your score:" + "<br>" +
		document.getElementById("hit").innerHTML + "<br>" +
		document.getElementById("miss").innerHTML

	}
	else{

	}

}

