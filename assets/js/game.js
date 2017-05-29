$(document).ready(function() {

var players  = ["reySkywalker", "obiwanKenobi", "darthMaul", "darthVader"];
console.log("It's working");

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

$("#rey").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
$("#rey").append($("<img>").attr("src", reySkywalker.image));
	
$("#maul").html("<p>" + darthMaul.name + " HP: " + darthMaul.health + "</p>");
$("#maul").append($("<img>").attr("src", darthMaul.image));

$("#vader").html("<p>" + darthVader.name + " HP: " + darthVader.health + "</p>");
$("#vader").append($("<img>").attr("src", darthVader.image));	

$("#obiwan").html("<p>" + obiwanKenobi.name + " HP: " + obiwanKenobi.health + "</p>");
$("#obiwan").append($("<img>").attr("src", obiwanKenobi.image));
});

$("#rey").on("click", function() {
	for (i=0; i < players; i++) {
		if (players[i].status != "champion") {
			reySkywalker.status = "champion";
			$("#champion").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");

		}

		else if (players[i].status != "opponent1") {
			reySkywalker.status = "opponent1";
			$("#opponents").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
		}


		else if (players[i].status != "opponent2") {
			reySkywalker.status = "opponent2";
			$("#opponents").html("<p>" + reySkywalker.name + " HP: " + reySkywalker.health + "</p>");
 		}

 		reySkywalker.status = "opponent3";
 }
});