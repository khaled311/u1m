$(function() {


    // Toggle open
    $(".drop span ,.drop> i").on("click", function(e) {
        $(".subMenu").slideToggle();
        $(".drop .ar").toggleClass("open");
        e.stopPropagation();
    });


    // Toggle open
    $(".subMenu > li").on("click", function() {
        $(this).find(".arr-left").toggleClass("open");
    });


    // Toggle open
    $(".subMenu > li").on("click", function() {
        $(this).find(".sub").slideToggle();
        $(this).siblings().find(".sub").slideUp();
        $(this).siblings().find(".arr-left").removeClass("open");
    
    });


    // open Side Nav
    $(".menuTriger").on("click", function() {
        $(this).fadeOut();
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
    });


    // Close Side Nav
    $(".navover, .close1").on("click", function() {
        if($(".sideNav").hasClass("open")){
            $(".menuTriger").fadeIn();
            $(".navover").removeClass("open");
            $(".sideNav").toggleClass("open");
            $("body").css("overflow", "auto");
        }
    });

    var swiper = new Swiper('.first-slider .swiper-container', {
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    var swiper = new Swiper('.clients .swiper-container', {
      loop: true,
      autoplay: true,
      slidesPerView: 7,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1024: {
          slidesPerView: 5
        },
        768: {
          slidesPerView: 4
        },
        640: {
          slidesPerView: 3
        },
        480: {
          slidesPerView: 1
        }
      }
    });


    //footer accordion
    if($(window).width() < 992){
      $(".foot-links button").attr("data-toggle", "collapse");
    }

    $('.foot-links button').on('click', function() {
        $(this).find("i").toggleClass("trans");
        $(this).parent().parent().siblings().find('.collapse').collapse('hide');
        $(this).parent().parent().siblings().find('button i').removeClass("trans");
    });

    // Search
    $(".searBtn").on("click", function() {
      $(".search").toggleClass("open");
      $(".overlay").fadeIn();
    });

    if($(window).width() < 992){
      $(".overlay, .bar").on("click", function(e) {
        $(".search").removeClass("open");
        $(".overlay").fadeOut();
      });
    }

    // Img To Svg Script
    $(function(){
      jQuery('img.svg').each(function(){
          var $img = jQuery(this);
          var imgID = $img.attr('id');
          var imgClass = $img.attr('class');
          var imgURL = $img.attr('src');
      
          jQuery.get(imgURL, function(data) {
              // Get the SVG tag, ignore the rest
              var $svg = jQuery(data).find('svg');
      
              // Add replaced image's ID to the new SVG
              if(typeof imgID !== 'undefined') {
                  $svg = $svg.attr('id', imgID);
              }
              // Add replaced image's classes to the new SVG
              if(typeof imgClass !== 'undefined') {
                  $svg = $svg.attr('class', imgClass+' replaced-svg');
              }
      
              // Remove any invalid XML tags as per http://validator.w3.org
              $svg = $svg.removeAttr('xmlns:a');
              
              // Check if the viewport is set, else we gonna set it if we can.
              if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                  $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
              }
      
              // Replace image with new SVG
              $img.replaceWith($svg);
      
          }, 'xml');
      
      });
  });
  

})