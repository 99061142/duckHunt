//Make the images a variable
var duck = document.getElementById("duckImage");  //Var for the duck hitbox
var background = document.getElementById("backgroundImage"); //Var for the background hitbox
//Variables for the margin of the duck
var duckMarginTop = 250;
var duckMarginLeft = 450;


//Change the position of the duck
direction = directions => {
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
//Every 1.5 seconds the duck is changing margins
let fly = setInterval(() => {
    direction(['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']);
}, 1500);


//Change the hit: / miss: to the number you have hit or missed
let hitCounter = 0;
let missCounter = 0;
duck.addEventListener("click", function(){
 	hitCounter++; 
	document.getElementById("hit").innerHTML = "Hit: " + hitCounter;
});
background.addEventListener("click", function(){
	missCounter++;
	document.getElementById("miss").innerHTML = "Miss: " + missCounter;
});