/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    $(".video .overlay img ").click(function(){
       
        $(".video .overlay iframe").slideToggle(600);
    });
    
    
    $('.ser1').click(function() {

        $('html, body').animate({

            scrollTop: $('#services').offset().top

        },2000);

    });
    
    
    $('.ser2').click(function() {

        $('html, body').animate({

            scrollTop: $('#information').offset().top

        },3500);

    }); 
    
    
    $('.mylist li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        //window.console.log($(this).data('class'));
        $(".work .complex").hide();
        $("." + $(this).data('class')).fadeIn(500);
    });
    
    
        //starting the carousel1111111111111
    $('.autoplay1').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true, 
       responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 3
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
           
  ] 
               
    }); 
    
        
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay2').slick({
    
    });
    });

    
    
});



