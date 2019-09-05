$(document).ready(function(){
	$("h1").click(function(){
		$("p").fadeToggle();
	});
	
	$("#firstP").click(function(){
		$(".otherP").hide();
		$("img").css({"display":"inline"});
	});
	
	
	
});