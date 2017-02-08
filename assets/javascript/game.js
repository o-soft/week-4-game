$(document).ready(function(){
	//set random number between 19-120
	var random = Math.floor((Math.random() * 120) + 19);
	$("#randomNumber").text(random);

	//set random number for gems
	var num1 = Math.floor(Math.random() * 12) + 1;
	var num2 = Math.floor(Math.random() * 12) + 1;
	var num3 = Math.floor(Math.random() * 12) + 1;
	var num4 = Math.floor(Math.random() * 12) + 1;

	//assign random value 1-12 to gem
	$("#one").attr("data-value", num1);
	var value1 = $("#one").data("num1");
	var value2 = $("#two").data("num2");
	var value3 = $("#three").data("num3");
	var value4 = $("#four").data("num4");

	//set variables
	var wins = 0;
	var losses = 0;
	var userTotal = 0;

	$("numberWins").text("wins");
	$("numberLosses").text("losses");

	//reset game random crystal number and gem values after win or loss
	
};

