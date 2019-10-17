$(function(){
    "use strict";

//preloader start    
$(window).load(function (){
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
}); 
//preloader ends 
//toggle icon start
    $('.navbar-toggler').click(function () {
        $('.bar').toggleClass('cross');
    });
//toggle icon ends
//color palette start    
    $('.icon').click(function () {
        $('.colors').toggleClass('view');
    });
    $('.icon').click(function(){
        $('.icon1').fadeOut();
        $('.icon2').fadeIn();
    });
    $('.icon2').click(function(){
        $(this).fadeOut();
        $('.icon1').fadeIn();
    });
//color palette ends        
//active menu start    
$('body').scrollspy({
    target: '#navbarSupportedContent'
})
//active menu ends    
//smooth scroll start   
$('#menubar a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });
// smooth scroll ends 
//menubar fixed top start 
    var $navOffset = $('#menubar').offset().top;
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > $navOffset) {
            $('#menubar').addClass('navFixed');
        } else {
            $('#menubar').removeClass('navFixed');
        }
    });

//menubar fixed top ends
//scroll to top button start
    $('.top_to').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling > 300) {
            $('.top_to').fadeIn();
        } else {
            $('.top_to').fadeOut();
        }
    });
// scroll to top button ends 
//banner text animation start
	 $('.tlt').textillate({
         loop: true,
         initialDelay: 0,
	     in: {
	         effect: 'fadeInLeftBig',
	         delayScale: 1,
	         autoStart: true,
	         delay: 20,
	         sync: false,
	         shuffle: false,
	         reverse: true,
             infinite: true,
	         callback: function () {}
	     },

	     // out animation settings.
	     out: {
	         effect: 'flipOutY',
	         delayScale: 1.5,
	         delay: 20,
	         sync: false,
	         shuffle: false,
	         reverse: true,
             infinite: true,
	         callback: function () {}
	     },
	 });
//banner text animation ends
//portfolio slide show start
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });
//portfolio slide show ends
//portfolio filtering start
    var containerEl = document.querySelector('.main_img');
    var mixer = mixitup(containerEl);
//portfolio filtering ends
//portfolio load more start
    $('.main_img').simpleLoadMore({
      item: '.items',
      count: 6
    });
//portfolio load more ends  
//portfolio menu active start
    $('.menu li').on('click', function (event) {
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          event.preventDefault();
        });
//portfolio menu active ends
//resume slider start  
$('.resume_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-up upbtn"></i>',
        nextArrow: '<i class="fa fa-chevron-down downbtn"></i>',
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//resume slider ends
//fun part counter start
    $('.counter').counterUp({
        delay: 10,
        time: 500
    });
//fun part counter ends
//testimonial slider start  
$('.testimonial_slide').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
     responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
          slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//testimonial slider ends
//color picker start
    $('.light').click(function(){
        $('body').addClass('light_bg').removeClass('selenium_bg dark_bg');
    });
    $('.selenium').click(function(){
        $('body').addClass('selenium_bg').removeClass('light_bg dark_bg');
    });
    $('.dark').click(function(){
        $('body').addClass('dark_bg').removeClass('light_bg selenium_bg');
    });
    $('.default').click(function(){
        $('body').addClass('default_bg').removeClass('light_bg selenium_bg dark_bg');
    });
//color picker ends    

//scroll animation start
     new WOW().init();
//scroll animation start
});
