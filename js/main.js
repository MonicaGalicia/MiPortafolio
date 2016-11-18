var i=0;
var texto= ' "Make things happen." ' ;

$(document).ready(function(){
	function pintarLetra(){
		$("#texto").append(texto[i]);
		if(i<texto.length){
			i++;
			setTimeout(pintarLetra,200);
		}
	};
	pintarLetra();
});




$( document ).ready(function(){
	 $(".button-collapse").sideNav();
}) 

$( document ).ready(function(){
	setTimeout(function(){
      $(".texto-animado").removeClass("hidden");
	})
},500)



