$(document).ready(function() {
//VARIABLES===================================================================
var players = { 
	"reySkywalker" = {
		name: "Rey Skywalker?",
		health: 150,
		maxAttack: 25,
		status: "",
		image: "assets/images/Rey-face-1200x750.jpg",
},	

	"obiwanKenobi" = {
	name: "Obi-wan Kenobi",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "assets/images/Ewan-McGregor-as-Obi-Wan-014.jpg",
},	

var darthMaul = {
	name: "Darth Maul",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "assets/images/darth-maul-main.jpeg",
},	

var darthVader = {
	name: "Darth Vader",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "assets/images/darth-vader-empire-strikes-back.jpg",
},
};

var championPicked = false;
var opponent1Picked = false;
var opponent2Picked = false;

// FUNCTIONS==================================================================

var charDiv = $("<div class='col-lg-2 fightRound' data-name='" + players.name + " '>");
var charName = $("<div class='fighters' data-name='" + players.name + " '>");
var charHealth = $("<div class='fighters' data-name='" + players.health + " '>");
var charImage = $("<div class='fighters' data-name='" + players.image + " '>");

$("#rey").html("<p>" + players.name + " HP: " + players.health + "</p>");

$("#rey").append($("<img>").attr("src", players[reySkywalker.image]).css("border", "1px solid blue"));
	


// DOM ========================================================================
// $("#rey").on("click", function() {
// 	for (i=0; i < players.length; i++) {
// 		if (championPicked === false) {
// 			reySkywalker.status = "champion";
// 			$(".champion").append("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
// 			$(".champion").append($("<img>").attr("src", reySkywalker.image).css("border", "2px solid green"));
// 			console.log(reySkywalker.status);
// 			championPicked = true;
// 			break;
// 		}

// 		else if (opponent1Picked == false) {
// 			reySkywalker.status = "opponent1";
// 			$(".opponents").append("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
// 			$(".opponents").append($("<img>").attr("src", reySkywalker.image).css("border", "2px solid red"));
// 			console.log(rerSkywalker.status);
// 			opponent1Picked = true;
// 			break;
// 		}


// 		else if (opponent2Picked == false) {
// 			reySkywalker.status = "opponent2";
// 			$(".opponents").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
// 			opponent2Picked = true;
// 			break;
//  		}

//  		else {
//  		reySkywalker.status = "opponent3";
// 		$(".opponents").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
// 		break;
//  	}
//  }
// });

// $("#maul").on("click", function() {
// 	for (i=0; i < players.length; i++) {
// 		if (championPicked == false) {
// 			darthMaul.status = "champion";
// 			$(".champion").append("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
// 			$(".champion").append($("<img>").attr("src", darthMaul.image).css("border", "2px solid green"));
// 			console.log(darthMaul.status);
// 			championPicked = true;
// 			break;
// 		}

// 		else if (opponent1Picked == false) {
// 			darthMaul.status = "opponent1";
// 			$(".opponents").append("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
// 			$(".opponents").append($("<img>").attr("src", darthMaul.image).css("border", "2px solid red"));
// 			console.log(darthMaul.status);
// 			opponent1Picked = true;
// 			break;
// 		}


// 		else if (opponent2Picked == false) {
// 			darthMaul.status = "opponent2";
// 			$(".opponents").append("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
// 			$(".opponents").append($("<img>").attr("src", darthMaul.image).css("border", "2px solid red"));
// 			console.log(darthMaul.status);
// 			opponent2Picked = true;
// 			break;
//  		}

//  		darthMaul.status = "opponent3";
//  		console.log(darthMaul.status);
//  		break;
//  }
// });
// $("#vader").on("click", function() {
// 	for (i=0; i < players.length; i++) {
// 		if (championPicked == false) {
// 			darthVader.status = "champion";
// 			$(".champion").append("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
// 			$(".champion").append($("<img>").attr("src", darthVader.image).css("border", "2px solid green"));
// 			console.log(darthVader.status);
// 			championPicked = true;
// 			break;
// 		}

// 		else if (opponent1Picked == false) {
// 			darthVader.status = "opponent1";
// 			$(".opponents").append("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
// 			$(".opponents").append($("<img>").attr("src", darthVader.image).css("border", "2px solid red"));
// 			console.log(darthVader.status);
// 			opponent1Picked = true;
// 			break;
// 		}

// 		else if (opponent2Picked == false) {
// 			darthVader.status = "opponent2";
// 			$(".opponents").append("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
// 			$(".opponents").append($("<img>").attr("src", darthVader.image).css("border", "2px solid red"));
// 			console.log(darthVader.status);
// 			opponent2Picked = true;
// 			break;
//  		}

//  		darthVader.status = "opponent3";
//  		console.log(darthVader.status);
//  		break;
//  }
// });
// $("#obiwan").on("click", function() {
// 	for (i=0; i < players.length; i++) {
// 		if (championPicked == false) {
// 			obiwanKenobi.status = "champion";
// 			$(".champion").append("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
// 			$(".champion").append($("<img>").attr("src", obiwanKenobi.image).css("border", "2px solid green"));
// 			console.log(obiwanKenobi.status);
// 			championPicked = true;
// 			break;
// 		}

// 		else if (opponent1Picked == false) {
// 			obiwanKenobi.status = "opponent1";
// 			$(".opponents").append("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
// 			$(".opponents").append($("<img>").attr("src", obiwanKenobi.image).css("border", "2px solid red"));
// 			console.log(obiwanKenobi.status);
// 			opponent1Picked = true;
// 			break;
// 		}


// 		else if (opponent2Picked == false) {
// 			obiwanKenobi.status = "opponent2";
// 			$(".opponents").html("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
// 			$(".opponents").append($("<img>").attr("src", obiwanKenobi.image).css("border", "2px solid red"));
// 			console.log(darthMaul.status);
// 			opponent2Picked = true;
// 			break;
//  		}

//  		obiwanKenobi.status = "opponent3";
//  		console.log(obiwanKenobi.status);
//  		break;
//  }
// });

//functions


// $("#fightRound").on("click", function() {
// 	fightRound();
// }

});