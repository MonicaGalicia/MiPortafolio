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
});




$( document ).ready(function(){
	 $(".button-collapse").sideNav();
}) 

$( document ).ready(function(){
	setTimeout(function(){
      $(".texto-animado").removeClass("hidden");
	})
},500)







