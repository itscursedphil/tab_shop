$(document).ready(function() {

    /*
    var lookbookItems = document.querySelectorAll('.lookbook .carousel img');
    console.log(lookbookItems.length);

    function lookbookCarousel(i){
      if(i < lookbookItems.length){
        lookbookItems[i].classList.add('active');
        setTimeout(function(){
          lookbookItems[i].classList.remove('active');
          i++;
          lookbookCarousel(i);
        },6000);
      } else {
        lookbookCarousel(0);
      }
    }

    lookbookCarousel(0);
    */
    /*
    var carousel = function(indexImage){
      var winHeight = $(window).height();
      var carousel = $('.carousel');
      var images = $('.carousel .carousel-img');
      var numImages = images.length;
      var carouselNav = $('.carousel .carousel-nav');
      var i = indexImage;
      var newInterval;

      var cycleCarousel = function(i){
        clearInterval(newInterval);
        console.log('Cleared interval');
        var startCarousel = function(){
            images.eq(i).removeClass('carousel-img-active');
            console.log('Removed class from ' + i);
            i++;
            cycleCarousel(i);
          };
        if(i < numImages){

          if(!images.eq(i).hasClass('carousel-img-active')){
            images.eq(i).addClass('carousel-img-active');
            console.log('Added class to ' + i);
          }

          newInterval = setInterval(startCarousel, 6000);

        } else {
          cycleCarousel(0);
        }
      };
      */
      /*
      var cycleCarousel = function(i){
        if(i < numImages){

          if(!images.eq(i).hasClass('carousel-img-active')){
            images.eq(i).addClass('carousel-img-active');
            console.log('Added class to ' + i);
          }
          setTimeout(function(){
            images.eq(i).removeClass('carousel-img-active');
            console.log('Removed class from ' + i);
            i++;
            cycleCarousel(i);
          }, 6000);

        } else {
          cycleCarousel(0);
        }
      };
      */
      /*
      var carouselNavClicked = function(){
        var index = $(this).index();
        $('.carousel .carousel-img.carousel-img-active').removeClass('carousel-img-active');
        console.log('Removed class');
        cycleCarousel(index);
      };
      
      var initCarousel = function(i){
        images.height(winHeight);
        for(index = 0; index < numImages; index++){
          carouselNav.append('<li class="carousel-nav-bullet"></li>');
        }
        $('.carousel .carousel-nav .carousel-nav-bullet').each(function(){
          $(this).bind('click', carouselNavClicked);
        });
        cycleCarousel(i);
      };

      initCarousel(i);

    };
    
    carousel(0);
    */
});