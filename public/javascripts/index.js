
$(document).ready(function(){
       $('.carousel').carousel();
    });


$('.carousel.carousel-slider').carousel({
        fullWidth:true,
      });

      var rouselAutoplay = setInterval(function(){
            $('.fa-angle-right').click();
          }, 3000);

      $('.fa-angle-right').click(function(){
        $('.carousel.carousel-slider').carousel('next');
        clearInterval(rouselAutoplay);
        rouselAutoplay = setInterval(function(){
            $('.fa-angle-right').click();
          }, 3000);
      });
      $('.fa-angle-left').click(function(){
        $('.carousel.carousel-slider').carousel('prev');
        clearInterval(rouselAutoplay);
        rouselAutoplay = setInterval(function(){
            $('.fa-angle-right').click();
          }, 3000);
      });
