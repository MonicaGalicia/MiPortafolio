var i=0;
var texto= 'Desarrolladora Web Front End .Apasionada del desarrollo Web . Amante de la naturaleza.Perseverante.Soñadora, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed nisi dicta. Tempore cupiditate, dolorem nostrum eos illo rerum. Illum modi facere aliquam architecto veniam commodi, fuga vel itaque consectetur! ' ;

$(document).ready(function(){

	function pintarLetra(){
		$("#texto").append(texto[i]);
		if(i<texto.length){
			i++;
			setTimeout(pintarLetra,100);
		}
	};
	pintarLetra();

	setTimeout(function(){
      $(".texto-animado").removeClass("hidden");
	}, 500);

	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

	var alturaSeccionDos = $(".secDos").position().top;

	$(window).scroll(function(e){
		var alturaActual = $(window).scrollTop();

		if ( (alturaActual + 200 ) >= alturaSeccionDos) {
			console.log("AQUIII")
			$("#seccionDos").addClass("animated bounceInDown")
			//$("#seccionDos").css("transform", "translateX(-200px) translateY(-200px)")
		}

	});

	var alturaSeccionTres = $(".secTres").position().top;

	$(window).scroll(function(e){
		var alturaActual2 = $(window).scrollTop();

		if ( (alturaActual2 + 300 ) >= alturaSeccionTres) {
			console.log("AQUIII")
			$("#seccionTres").addClass("animated bounceInDown")
			//$("#seccionDos").css("transform", "translateX(-200px) translateY(-200px)")
		}

	});

});








