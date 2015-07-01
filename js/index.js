$(document).ready(function(){

	console.log("is this thing on?");

	$(".size img").click(hideSize);

	function hideSize(){
		console.log("size clicked");
		var size = $(".size").val()
		console.log(size)
		$(".size").hide();
		$(".coat").show();
	}
})
