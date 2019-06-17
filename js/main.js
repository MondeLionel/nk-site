$(document).ready(function () {
// first page load

	setTimeout(function(){
		$('body').find("div.loader").addClass("slide-out-right");
		setTimeout(function(){
			$('body').addClass("fade-in");
			$('body .mainHeader').removeClass("hide-body");

		}, 900)
	}, 1000)


	// mousemove background beeyatch
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(".mainHeader").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 20;
          $('.mainHeader').css("background-position", newvalueX+"px     "+newvalueY+"px");
});




	
})
