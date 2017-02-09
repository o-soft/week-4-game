var elJuego = {
	wins: 0,
	losses: 0,
	randomNumber: 0,
	finalTotal: 0,
	gem1: 0,
	gem2: 0,
	gem3: 0,
	gem4: 0,
	init: function(){
		this.finalTotal = 0;
		this.randomNumber = this.pickRandom(19,120);
		this.gem1 = this.pickRandom(1,12);
		this.gem2 = this.pickRandom(1,12);
		this.gem3 = this.pickRandom(1,12);
		this.gem4 = this.pickRandom(1,12);
		$("#numberLosses").text(this.losses);
		$("#numberWins").text(this.wins);
		$("#randomNumber").text(this.randomNumber);
		$("#finalTotal").text(this.finalTotal);

	},
	reset: function(){
		this.init();

		//reset html
	},
	pickRandom: function(min, max){
		return Math.floor(Math.random() * (max - min) + min); 
	},
	ganar: function(){
			alert("Tu Ganaste"); 
			this.wins++;	
			$("#numberWins").text(this.wins);
			this.reset();
			
	},
	perder: function(){
			alert("Tu Perdiste"); 
			this.losses++;	
			$("#numberLosses").text(this.losses);
			this.reset();
	},

	userTotal: function(valor){
		if (this.finalTotal < this.randomNumber){
				this.finalTotal += valor;
		} 
		if (this.finalTotal === this.randomNumber){
		this.ganar();
		}
		else if (this.finalTotal > this.randomNumber){
		this.perder();
		};
	},
};
elJuego.init();

// $("#one").on("click", function(){
// 	elJuego.finalTotal += elJuego.gem1;
// 	console.log(elJuego);
// 	$("#finalTotal").text(elJuego.finalTotal); 
// 		if (elJuego.finalTotal === elJuego.randomNumber){
// 		elJuego.ganar();
// 	}
// 		else if (elJuego.finalTotal > elJuego.randomNumber){
// 		elJuego.perder();
// 	}
$("#one").on("click", function(){
	elJuego.userTotal(elJuego.gem1);
	$("#finalTotal").text(elJuego.finalTotal); 
	
});

$("#two").on("click", function(){
	elJuego.userTotal(elJuego.gem2);
	$("#finalTotal").text(elJuego.finalTotal); 
	
});

$("#three").on("click", function(){
	elJuego.userTotal(elJuego.gem3);
	$("#finalTotal").text(elJuego.finalTotal); 
	
});

$("#four").on("click", function(){
	elJuego.userTotal(elJuego.gem4);
	$("#finalTotal").text(elJuego.finalTotal); 
	
});

// $("#GreenGem").on("click", function(){
// 	elJuego.finalTotal += elJuego.gem2;
// 	$('#finalTotal').text(elJuego.finalTotal); 
// 		if (elJuego.finalTotal === elJuego.randomNumber){
// 			elJuego.ganar();
// 		}

// 		else if (elJuego.finalTotal > elJuego.randomNumber){
// 			elJuego.ganar();
// 		}
// });

// $("#RedGem").on("click", function(){
// 	elJuego.finalTotal += elJuego.gem3;
// 	$('#finalTotal').text(elJuego.finalTotal); 
// 		if (elJuego.finalTotal === elJuego.randomNumber){
// 			elJuego.ganar();
// 		}
	
// 		else if (elJuego.finalTotal > elJuego.randomNumber){
// 			elJuego.ganar();
// 		}	
// });

// $("#YellowGem").on("click", function(){
// 	elJuego.finalTotal += elJuego.gem4;
// 	$('#finalTotal').text(elJuego.finalTotal); 
// 		if (elJuego.finalTotal === elJuego.randomNumber){
// 			elJuego.ganar();
// 		}
// 		else if (elJuego.finalTotal > elJuego.randomNumber){
// 			elJuego.ganar();
// 		}
// });


// $(document).ready(function(){
// 	//set random number between 19-120
// 	var random = Math.floor((Math.random() * 120) + 19);
// 	$("#randomNumber").text(random);

	//set random number for gems
	// var num1 = Math.floor(Math.random() * 12) + 1;
	// var num2 = Math.floor(Math.random() * 12) + 1;
	// var num3 = Math.floor(Math.random() * 12) + 1;
	// var num4 = Math.floor(Math.random() * 12) + 1;

	//assign random value 1-12 to gem
	// $("#one").attr("data-value", num1);
	// var value1 = $("#one").data("num1");
	// var value2 = $("#two").data("num2");
	// var value3 = $("#three").data("num3");
	// var value4 = $("#four").data("num4");

	//set variables
	// var wins = 0;
	// var losses = 0;
	// var userTotal = 0;

	

	//reset game random crystal number and gem values after win or loss
	


