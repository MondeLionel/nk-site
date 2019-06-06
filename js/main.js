$(document).ready(function () {
// first page load

	setTimeout(function(){
			$('body').find("div.ping").addClass("d-none");
		$('body').find("div.loader").addClass("slide-out-right");
		setTimeout(function(){
			$('body').addClass("fade-in");
			$('body .mainHeader').removeClass("hide-body");

		}, 900)
	}, 1000)
	
})