$(document).ready(function() {

var reySkywalker = {
	name: "Rey Skywalker?",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "assets/images/Rey-face-1200x750.jpg",
};	

console.log(reySkywalker.name + " HP: " + reySkywalker.health);

var obiwanKenobi = {
	name: "Obi-wan Kenobi",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "assets/images/Ewan-McGregor-as-Obi-Wan-014.jpg",
};	

var darthMaul = {
	name: "Darth Maul",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "assets/images/darth-maul-main.jpeg",
};	

var darthVader = {
	name: "Darth Vader",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "assets/images/darth-vader-empire-strikes-back.jpg",
};

var players  = [reySkywalker, obiwanKenobi, darthMaul, darthVader];
console.log("It's working");

$("#rey").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
$("#rey").append($("<img>").attr("src", reySkywalker.image).css("border", "1px solid blue"));
	
$("#maul").html("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
$("#maul").append($("<img>").attr("src", darthMaul.image).css("border", "1px solid blue"));

$("#vader").html("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
$("#vader").append($("<img>").attr("src", darthVader.image).css("border", "1px solid blue"));	

$("#obiwan").html("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
$("#obiwan").append($("<img>").attr("src", obiwanKenobi.image).css("border", "1px solid blue"));


$("#rey").on("click", function() {
	for (i=0; i < players.length; i++) {
		if (players[i].status != "champion") {
			reySkywalker.status = "champion";
			$(".champion").append("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
			$(".champion").append($("<img>").attr("src", reySkywalker.image).css("border", "2px solid green"));
			console.log(reySkywalker.status);
			break;
		}

		else if (players[i].status != "opponent1") {
			reySkywalker.status = "opponent1";
			$(".opponents").append("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
			$(".opponents").append($("<img>").attr("src", reySkywalker.image).css("border", "2px solid red"));
			console.log(rerSkywalker.status);
			break;
		}


		else if (players[i].status != "opponent2") {
			reySkywalker.status = "opponent2";
			$(".opponents").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
			break;
 		}

 		else {
 		reySkywalker.status = "opponent3";
		$(".opponents").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
		break;
 	}
 }
});

$("#maul").on("click", function() {
	for (i=0; i < players.length; i++) {
		if (players[i].status != "champion") {
			darthMaul.status = "champion";
			$(".champion").append("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
			$(".champion").append($("<img>").attr("src", darthMaul.image).css("border", "2px solid green"));
			console.log(darthMaul.status);
			break;
		}

		else if (players[i].status != "opponent1") {
			darthMaul.status = "opponent1";
			$(".opponents").append("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
			$(".opponents").append($("<img>").attr("src", darthMaul.image).css("border", "2px solid red"));
			console.log(darthMaul.status);
			break;
		}


		else if (players[i].status != "opponent2") {
			darthMaul.status = "opponent2";
			$(".opponents").html("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
			console.log(darthMaul.status);
			break;
 		}

 		darthMaul.status = "opponent3";
 		console.log(darthMaul.status);
 		break;
 }
});
$("#vader").on("click", function() {
	for (i=0; i < players.length; i++) {
		if (players[i].status != "champion") {
			darthVader.status = "champion";
			$(".champion").append("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
			$(".champion").append($("<img>").attr("src", darthVader.image).css("border", "2px solid green"));
			console.log(darthVader.status);
			break;
		}

		else if (players[i].status != "opponent1") {
			darthVader.status = "opponent1";
			$(".opponents").append("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
			$(".opponents").append($("<img>").attr("src", darthVader.image).css("border", "2px solid red"));
			console.log(darthVader.status);
			break;
		}


		else if (players[i].status != "opponent2") {
			darthVader.status = "opponent2";
			$(".opponents").html("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
			console.log(darthVader.status);
			break;
 		}

 		darthVader.status = "opponent3";
 		console.log(darthVader.status);
 		break;
 }
});
$("#obiwan").on("click", function() {
	for (i=0; i < players.length; i++) {
		if (players[i].status != "champion") {
			obiwanKenobi.status = "champion";
			$(".champion").append("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
			$(".champion").append($("<img>").attr("src", obiwanKenobi.image).css("border", "2px solid green"));
			console.log(obiwanKenobi.status);
			break;
		}

		else if (players[i].status != "opponent1") {
			obiwanKenobi.status = "opponent1";
			$(".opponents").append("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
			$(".opponents").append($("<img>").attr("src", obiwanKenobi.image).css("border", "2px solid red"));
			console.log(obiwanKenobi.status);
			break;
		}


		else if (players[i].status != "opponent2") {
			obiwanKenobi.status = "opponent2";
			$(".opponents").html("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
			console.log(darthMaul.status);
			break;
 		}

 		obiwanKenobi.status = "opponent3";
 		console.log(obiwanKenobi.status);
 		break;
 }
});
});