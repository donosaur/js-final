var game = {
	init: function() {

	// get random number in range 0 to range -1
	function random(range) {
			return Math.floor(Math.random() * range);
	}

	// returns a random 0 or 1, true or false
	function randomize() {
		return random(3) - 1;
	}

	// GAME SET UP

	// create an aray of class names
	var cards = [	"card-1",
								"card-2",
								"card-3",
								"card-4",
								"card-5",
								"card-6",
								"card-7",
								"card-8",
								"card-9",
								"card-10",
								"card-11",
								"card-12"];

	// copy card_array as temp_array so we can modify
	var temp_cards = cards.slice(0);
	// create new empty array of classes, this will be our board game
	var game_cards = [];
	// set the number of pairs
	var card_pairs = 8;
	// loop through temp_array and make new array of pairs that we will play with
	for (var i = 0; i < card_pairs; i++) {
		var r = random(temp_cards.length);
		var card = temp_cards.splice(r, 1);
		game_cards = game_cards.concat(card);
		game_cards = game_cards.concat(card);
	}

	game_cards.sort(randomize);

	$(".box").click(function() {
		$(this).toggleClass("flip");
	});

	// assign a tile class to each back
	$(".back").each(function(i) {
		$(this).addClass(game_cards[i]);
		$(this).addClass("selected");
		$(this).parent().attr("data-name", game_cards[i]);
	});

	console.log("All Cards: " + cards);
	console.log("Temp Cards: " + temp_cards);
	console.log("Game Cards: " + game_cards);

	// GAME LOGIC
	// var firstPick = undefined;
	// var secondPick = undefined;


	$(".box").click(function() {
		// if the card is flipped or already matched, do not flip card
		if ($(this).hasClass("flip") || $(this).hasClass("lock")) {
			return;
		}
		$(this).toggleClass("flip");
	});
	}
};
game.init();
