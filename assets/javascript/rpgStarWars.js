$("document").ready(function() {
	
//VARIABLES ==========================================
	var characters = {
		"Obiwan Kenobi": {
			name: "Obiwan Kenobi",
			health: 150,
			attack: 25,
			image: "assets/images/obi-wan.jpg",
			enemyAttackBack: 15,
		},

		"Rey Skywalker?": {
			name: "Rey Skywalker?",
			health: 150,
			attack: 25,
			image: "assets/images/rey.jpg",
			enemyAttackBack: 15,
		},

		"Darth Vader": {
			name: "Darth Vader",
			health: 150,
			attack: 25,
			image: "assets/images/darth-vader-empire-strikes-back.jpg",
			enemyAttackBack: 15,
		},

		"darth Maul": {
			name: "Darth Maul",
			health: 150,
			attack: 25,
			image: "assets/images/darth-maul-main.jpeg",
			enemyAttackBack: 15,
		},		
	};

	var currSelectedCharacter;
	var combatants = [];
	var currDefender;
	var turnCounter = 1;
	var killCount = 0;
	
//FUNCTIONS =============================================

	var renderOne = function(character, renderArea, charStatus) {

		var charDiv = $("<div class='character' data-name='" + character.name + "'>");	
	var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.image);
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
		
		$(renderArea).append(charDiv);

		if (charStatus === "enemy")	{
			$(charDiv).addClass("enemy");
		}

		else if (charStatus === "defender") {
			currDefender = character;
			$(charDiv).addClass("target-enemy");	
		}
	};

	//function for the game message
	var  renderMessage = function(message) {
		var gameMesageSet = $("#game-message");
		var newMessage = $("<div>").text("message");
		gameMesageSet.append(newMessage);

		if (message === "clearMessage") {
			gameMesageSet.text("");	
		}
	};

	var renderCharacters = function(charObj, areaRender) {
		if (areaRender === "#characters-section") {
			$(areaRender).empty();
		
		for (var key in charObj) {
			if (charObj.hasOwnProperty(key)) {
				renderOne(charObj [key], areaRender, "");	
			}
		}
	}

	if (areaRender === "#selectedCharacter") {
		renderOne(charObj, areaRender, "");
	}

	if (areaRender === "#available-to-attack-section") {
		for (var i=0; i < charObj.length; i++) {
			renderOne(charObj[i], areaRender, "enemy");
		}

		$(document).on("click", ".enemy", function() {
			var name = ($(this).attr("data-name"));
			if ($("#defender").children().length === 0) {
				renderCharacters(name, "#defender");
				$(this).hide();
				renderMessage("clearMessage");
			}
		});
	}

	if (areaRender === "#defender") {
		$(areaRender).empty();
		for (var i=0; i < combatants.length; i++) {
			if (combatants[i].name === charObj) {
				renderOne(combatants[i], areaRender, "defender");
			}
		}
	}

	if (areaRender === "playerDamage") {
		$("#defender").empty();
		renderOne(charObj, "#defender", "defender");
	}

	if (areaRender === "enemyDamage") {
		$("#selected-character").empty();
		renderOne(charObj, "#selected-character", "");
	}

	if (areaRender === "enemyDefeated") {
		$("#defender").empty();
		var gameStateMessage = "You have defeated" + charObj.name + ". Choose your next opponent.";
		renderMessage(gameStateMessage);
	}
};

var restartGame = function(inputEndGame) {

	var restart = $("<button>restart</button>").click(function() {
		location.reload();
	});

	var gameState = $("<div>").text(inputEndGame);

	$("body").append(gameState);
	$("body").append(restart);

	};


// ===================================================================


 // Render all characters to the page when the game starts.
  renderCharacters(characters, "#characters-section");

 // On click event for selecting our character.
  $(document).on("click", ".character", function() {

   // Saving the clicked character’s name.
    var name = $(this).attr("data-name");

   // If a player character has not yet been chosen...
    if (!currSelectedCharacter) {
      // We populate currSelectedCharacter with the selected character’s information.
      currSelectedCharacter = characters[name];
      // We then loop through the remaining characters and push them to the combatants array.
      for (var key in characters) {
        if (key !== name) {
          combatants.push(characters[key]);
        }
      }

     // Hide the character select div.
      $("#characters-section").hide();

     // Then render our selected character and our combatants.
      renderCharacters(currSelectedCharacter, "#selected-character");
      renderCharacters(combatants, "#available-to-attack-section");
    }
  });

 // When you click the attack button, run the following game logic...
  $("#attack-button").on("click", function() {

   // If there is a defender, combat will occur.
    if ($("#defender").children().length !== 0) {

     // Creates messages for our attack and our opponents counter attack.
      var attackMessage = "You attacked " + currDefender.name +  "for"  + (currSelectedCharacter.attack * turnCounter) + " damage.";
      var counterAttackMessage = currDefender.name + " attacked you back for " + currDefender.enemyAttackBack + " damage.";
      renderMessage("clearMessage");

     // Reduce defender’s health by your attack value.
      currDefender.health -= (currSelectedCharacter.attack * turnCounter);

     // If the enemy still has health..
      if (currDefender.health > 0) {

       // Render the enemy’s updated character card.
        renderCharacters(currDefender, "playerDamage");

       // Render the combat messages.
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

       // Reduce your health by the opponent’s attack value.
        currSelectedCharacter.health -= currDefender.enemyAttackBack;

       // Render the player’s updated character card.
        renderCharacters(currSelectedCharacter, "enemyDamage");

       // If you have less than zero health the game ends.
        // We call the restartGame function to allow the user to restart the game and play again.
        if (currSelectedCharacter.health <= 0) {
          renderMessage("clearMessage");
          restartGame("You been defeated...GAME OVER!!!");
          $("#attack-button").unbind("click");
        }
      }
      // If the enemy has less than zero health they are defeated.
      else {
        // Remove your opponent’s character card.
        renderCharacters(currDefender, "enemyDefeated");
        // Increment your kill count.
        killCount++;
        // If you have killed all of your opponents you win.
        // Call the restartGame function to allow the user to restart the game and play again.
        if (killCount >= 3) {
          renderMessage("clearMessage");
          restartGame("You Won!!!! GAME OVER!!!");
        }
      }
      // Increment turn counter. This is used for determining how much damage the player does.
      turnCounter++;
    }
    // If there is no defender, render an error message.
    else {
      renderMessage("clearMessage");
      renderMessage("No enemy here.");
    }
  });
});

