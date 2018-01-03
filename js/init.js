//Funcion para el nav de la izquierda
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  });
})(jQuery);

//Funcion para el slider
$(document).ready(function(){
     $('.carousel').carousel();
     $('carousel-slider').carousel({fullWidth: false});

     //siguiente
     $('.carousel').carousel('next' , 1);
      //anterior
     $('.carousel').carousel('prev', 1);

   });
//Funcion para los tabs del Porfolio
   $(document).ready(function(){
    $('ul.tabs').tabs();
  });

//Funcion para imagens del Porfolio
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
//Funcion para el slider
  $(document).ready(function(){
      $('.slider').slider();

      // Pause slider
      $('.slider').slider('pause');
      // Start slider
      $('.slider').slider('start');
      // Next slide
      $('.slider').slider('next');
      // Previous slide
      $('.slider').slider('prev');
    });
