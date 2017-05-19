// FUNCTIONS

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
var card_array = [	"card-1",
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
var temp_array = card_array.slice(0);
// create new empty array of classes, this will be our board game
var tile_array = [];
// set the number of pairs
var tile_pairs = 6;
// loop through temp_array and make new array of pairs that we will play with
for (var i = 0; i < tile_pairs; i++) {
	var r = random(temp_array.length);
	var tile = temp_array.splice(r, 1);
	tile_array = tile_array.concat(tile);
	tile_array = tile_array.concat(tile);
}

tile_array.sort(randomize);

$(".box").click(function() {
	$(this).toggleClass("flip");
});

// assign a tile class to each back
$(".back").each(function(i) {
	$(this).addClass(tile_array[i]);
	$(this).parent().attr("data-name", tile_array[i]);
});

console.log("card array: " + card_array);
console.log("temp array: " + temp_array);
console.log("tile array: " + tile_array);

// GAME LOGIC
var firstPick = undefined;
var secondPick = undefined;

$(".box").click(function() {
	if ($(this).hasClass("flip") || $(this).hasClass("lock")) {
		return;
	}
	$(this).toggleClass("flip");
});
