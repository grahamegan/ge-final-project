
var size;
var coat;
var tail;

$(document).ready(function(){

	console.log("is this thing on?");

	$(".size img").click(identifySize);
	$(".coat img").click(identifyCoat);
	$(".tail img").click(identifyTail);
	$("button").click(idogtify);

	function identifySize(){
		console.log("size clicked");
		
		size = $(this).attr("alt");
		
		console.log(size);
		
		$(".size").hide();
		$(".coat").show();
	}

	function identifyCoat(){
		console.log("coat clicked");

		coat = $(this).attr("alt");

		console.log(coat);

		$(".coat").hide();
		$(".tail").show();
	}

	function identifyTail(){
		console.log("tail clicked");

		tail = $(this).attr("alt");

		console.log(tail);

		$(".tail").hide();
		$("button").show();
		$("body").addClass("black");

	}

	function idogtify(){
		console.log("idogtify clicked");
		// $("button").hide();

		if (size == "small") {
			if (coat == "long"){
				if (tail == "bob"){
					$("button").html("It's a Corgi!");
					console.log("it's a corgi!");}
				else { if (tail == "docked"){
					$("button").html("It's a Field Spaniel!");
					console.log("it's a field spaniel!");}
				else { if (tail == "screw"){
					$("button").html("It's a Chow Chow!");
					console.log("it's a chow chow!");}
				}
				}
			
			} else { if (coat == "smooth"){
				if (tail == "flagpole"){
					$("button").html("It's a Beagel!");
					console.log("it's a beagel!");}
				else { if (tail == "screw"){
					$("button").html("It's a Pug!");
					console.log("it's a pug!");}
				}
				}
			}
		}
	}
})
