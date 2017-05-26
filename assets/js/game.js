document.ready(function() {

// var players  = ["reySkywalker", "obiwanKenobi", "darthMaul", "darthVader"];
console.log("It's working");

var reySkywalker = {
	name: "Rey Skywalker?",
	health: 150,
	maxAttack: 25,
	status: "",
	image: "../assets/images/Rey-face-1200x750.jpg",
};	

console.log(reySkywalker.name + " HP: " + reySkywalker.health);
// var = obiwanKenobi {
// 	name: "Obi-wan Kenobi",
// 	health: 150,
// 	status: "",
// 	image: "../assets/images/darth-maul-main.jpg";
// };	

// var = darthMaul {
// 	name: "Darth Maul",
// 	health: 150,
// 	status: "",
// 	image: "../assets/images/Ewan-McGregor-as-Obi-Wan-014.jpg";
// };	

// var = darthVader {
// 	name: "Darth Vader",
// 	health: 150,
// 	status: "",
// 	image: "../assets/images/darth-vader-empire-stries-back.jpg";
// };	
$("#rey").html(reySkywalker.name + " HP: " + reySkywalker.health);



});
