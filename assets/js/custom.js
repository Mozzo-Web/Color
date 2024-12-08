// ==================================================
// Project Name  :  Afkar - HTML Template
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  29 April 2020
// Author        :  creative-wp -->> (https://themeforest.net/user/creative-wp)
// Developer:    :  Rakibul Islam Dewan
// ==================================================




(function($) {
  "use strict";


  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------


  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // preloader - end
  // --------------------------------------------------


  // background image - start
  // --------------------------------------------------
  $('[data-background]').each(function() {
    $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
  });
  // background image - end
  // --------------------------------------------------


  // collapse sidebar - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close-btn, .overlay').on('click', function () {
      $('.sidebar-menu').removeClass('active');
       $('.cart-sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('.menu-btn').on('click', function () {
      $('.sidebar-menu').addClass('active');
      $('.overlay').addClass('active');
    });

    $('.cart-btn').on('click', function () {
      $('.cart-sidebar').addClass('active');
      $('.overlay').addClass('active');
    });
  });
  // collapse sidebar - end
  // --------------------------------------------------


  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-header').addClass("stuck")
    } else {
      $('.sticky-header').removeClass("stuck")
    }
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $(".header-section.text-white .brand-logo > a > img").attr("src", "assets/images/logo/logo_1.png");
    } else {
      $(".header-section.text-white .brand-logo > a > img").attr("src", "assets/images/logo/logo_2.png");
    }
  });
  // sticky header - end
  // --------------------------------------------------


  // hanging header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.hanging-header').addClass("active")
    } else {
      $('.hanging-header').removeClass("active")
    }
  });
  // hanging header - end
  // --------------------------------------------------


  // secondary header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.secondary-header').addClass("active")
    } else {
      $('.secondary-header').removeClass("active")
    }
  });
  // secondary header - end
  // --------------------------------------------------


  // Counter - start
  // --------------------------------------------------
  $('.counter-text').counterUp({
    delay: 10,
    time: 1000
  });
  // Counter - end
  // --------------------------------------------------


  // popup image / video - start
  // --------------------------------------------------
  $('.zoom-gallery').magnificPopup({
    delegate: '.popup-image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });

  $('.popup-video').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
  // popup image / video - end
  // --------------------------------------------------


  // multy count down - start
  // --------------------------------------------------
  $('.countdown-list').each(function(){
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime(''
          + '<li class="timer-item days"><strong>%D</strong><small>days</small></li>'
          + '<li class="timer-item hours"><strong>%H</strong><small>hours</small></li>'
          + '<li class="timer-item mins"><strong>%M</strong><small>mins</small></li>'
          + '<li class="timer-item seco"><strong>%S</strong><small>seco</small></li>'));
      });
    });
  });
  // multy count down - end
  // --------------------------------------------------


  // home page sliders - start
  // --------------------------------------------------
  $('#agency-default-carousel').owlCarousel({
    items:1,
    margin:0,
    nav:false,
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true
  });
  // home page sliders - start
  // --------------------------------------------------


  // partners carousel - start
  // --------------------------------------------------
  $('#partners-carousel').owlCarousel({
    nav:true,
    margin:0,
    loop:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      380:{
        items:2
      },
      480:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });
  // partners carousel - end
  // --------------------------------------------------


  // testimonial carousel - start
  // --------------------------------------------------
  $('.testimonial-carousel-1').owlCarousel({
    items:1,
    nav:false,
    loop:true,
    margin:50,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true
  });
  $('#testimonial-carousel-2').owlCarousel({
    items:1,
    nav:true,
    loop:true,
    margin:30,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      767:{
        items:1
      },
      800:{
        items:2
      },
      991:{
        items:2
      },
      1000:{
        items:2
      }
    }
  });
  // testimonial carousel - end
  // --------------------------------------------------


  // portfolio carousel - start
  // --------------------------------------------------
  $('#portfolio-carousel').owlCarousel({
    nav:true,
    margin:0,
    loop:true,
    dots:false,
    smartSpeed:700,
    responsive:{
      0:{
        items:1
      },
      380:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1920:{
        items:4
      }
    }
  });

  $('#portfolio-carousel-2').owlCarousel({
    nav:true,
    margin:30,
    loop:true,
    dots:false,
    smartSpeed:700,
    responsive:{
      0:{
        items:1
      },
      550:{
        items:2
      },
      767:{
        items:2
      },
      880:{
        items:3
      },
      1000:{
        items:3
      },
      1920:{
        items:3
      }
    }
  });

  $('#portfolio-carousel-3').owlCarousel({
    items:1,
    nav:true,
    margin:0,
    loop:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
  });

  $('#details-image-carousel').owlCarousel({
    items:1,
    margin:0,
    nav:false,
    loop:true,
    autoplay:true,
    smartSpeed:1000,
    // animateIn:'fadeIn',
    autoplayTimeout:6000,
    autoplayHoverPause:true
  });
  // portfolio carousel - end
  // --------------------------------------------------


  // shop carousel - start
  // --------------------------------------------------
  $('#shop-carousel').owlCarousel({
    nav:true,
    margin:0,
    loop:true,
    margin:30,
    dots:false,
    smartSpeed:700,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      580:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1920:{
        items:4
      }
    }
  });
  // shop carousel - end
  // --------------------------------------------------


  // team carousel - start
  // --------------------------------------------------
  $('#team-carousel').owlCarousel({
    nav:true,
    loop:true,
    margin:30,
    dots:false,
    smartSpeed:1000,
    responsive:{
      0:{
        items:1
      },
      680:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });
  // team carousel - end
  // --------------------------------------------------


  // property carousel - start
  // --------------------------------------------------
  $('#property-carousel').owlCarousel({
    nav:true,
    margin:30,
    loop:true,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      580:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });
  // property carousel - end
  // --------------------------------------------------


  // portfolio filter - start
  // --------------------------------------------------
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  var filterFns = {
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  // portfolio filter - end
  // --------------------------------------------------


  // masoney grid layout - start
  // --------------------------------------------------
  var $masoney = $('.masoney-grid').imagesLoaded( function() {
    $masoney.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    }); 
  });
  // masoney grid layout - end
  // --------------------------------------------------


  // price range - start
  // --------------------------------------------------
  if($("#slider-range").length){
    $( "#slider-range" ).slider({
      range: true,
      min: 5,
      max: 1000,
      values: [ 30.00, 429.00 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }

  $('.ar_top').on('click', function () {
    var getID = $(this).next().attr('id');
    var result = document.getElementById(getID);
    var qty = result.value;
    $('.proceed_to_checkout .update-cart').removeAttr('disabled');
    if( !isNaN( qty ) ) {
      result.value++;
    }else{
      return false;
    }
  });
  // price range - end
  // --------------------------------------------------


  // quantity - start
  // --------------------------------------------------
  (function() {
    window.inputNumber = function(el) {
      var min = el.attr("min") || false;
      var max = el.attr("max") || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function() {
        init($(this));
      });

      function init(el) {
        els.dec.on("click", decrement);
        els.inc.on("click", increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    };
  })();
  inputNumber($(".input-number"));
  // quantity - end
  // --------------------------------------------------


  // google map - start
  // --------------------------------------------------
  function isMobile() { 
    return ('ontouchstart' in document.documentElement);
  }

  function init_gmap() {
    if ( typeof google == 'undefined' ) return;
    var options = {
      center: [25.664047, -100.300548],
      zoom: 15,
      styles: [
      {elementType: 'geometry', stylers: [{color: '#eaeaea'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '$pure-black'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#61605e'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#cbe99f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#98786d'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#39c2f8'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#fedd96'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#eeca83'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#965c28'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#fef5b6'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f1e0ca'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#a1cafe'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '$pure-black'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ffffff'}]
      }
      ],
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      scrollwheel: false,
      streetViewControl: true,
    }

    if (isMobile()) {
      options.draggable = false;
    }

    $('#google-map').gmap3({
      map: {
        options: options
      },
      marker: {
        latLng: [25.664047, -100.300548],
        // options: { icon:  'assets/images/logo/favicon.png' }
      }
    });
  }
  init_gmap();
  // google map - end
  // --------------------------------------------------

  // smtp - start
  // --------------------------------------------------

  $("#success").hide();
  $("#error").hide();

  if ($("#contact-form").length) {
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },

            email: "required",
        },

        messages: {
            name: "Ingrese su Nombre y Apellido",
            email: "Ingrese su Correo Electrónico"
        },

        submitHandler: function (form) {
          if(!form.comment.value)
            form.comment.value= "";
          if(!form.company.value)
            form.company.value= "Ninguna";

            Email.send({
                SecureToken:"80f38695-2036-45fb-9ae7-0ff340ef171c",
                To : 'contacto@drongo.com.mx',
                From : "no-reply@drongo.com.mx",
                Subject : "Solicitud de Drongo GPS System",
                Body : "Hola mi nombre es " + 
                form.name.value + " Empresa: " + 
                form.company.value + " Email: " + form.email.value + '\n' + form.comment.value
            }).then(
              message => checkSMTP(message,form)
            );
            return false;
        }
    });
}

function checkSMTP(message,form){
  if(message=="OK"){
      $( "#loader").hide();
      $( "#success").slideDown( "slow" );
      setTimeout(function() {
      $( "#success").slideUp( "slow" );
      }, 3000);
      form.reset();
  }

  else{
      console.log(message);
      $( "#loader").hide();
      $( "#error").slideDown( "slow" );
      setTimeout(function() {
      $( "#error").slideUp( "slow" );
      }, 3000);
  }
}

})(jQuery);