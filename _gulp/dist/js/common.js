'use strict';

// Document ready
$(document).on('ready', function(){

  // Magnific popup gallery
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery:{
        enabled:true
      }
    });
  });

  // Magnific popup one image
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  // Language block enabled
  $('.lang').on('click', function(e) {
    e.stopPropagation();
  });
  $('.lang__head').on('click', function() {
    var block = $(this).parent();
    if (block.hasClass('is-active')) {
      block.removeClass('is-active')
    } else {
      block.addClass('is-active')
    }
    $('.nav').removeClass('is-active');
  });

  // Mobile menu enabled
  $('.nav').on('click', function(e) {
    e.stopPropagation();
  });
  $('#menu-btn').on('click', function(e) {
    e.stopPropagation();

    var block = $(this).parent();
    if (block.hasClass('is-active')) {
      block.removeClass('is-active');
    } else {
      block.addClass('is-active');
    }
    $('.lang').removeClass('is-active');
  });

  $(document).on('click', function(){

    // Language disabled
    var lang = $('.lang');
    if (lang.hasClass('is-active')) {
      lang.removeClass('is-active')
    }

    // Mobile menu disabled
    var nav = $('.nav');
    if (nav.hasClass('is-active')) {
      nav.removeClass('is-active')
    }


  });

  // Footer menu mobile animation
  footerNav();

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

$(window).on('load', function() { });

$(window).on('scroll', function() { });
$(window).on('resize', function() {
  var width = $(window).width();
  
  if (width >= 992) {
    $('.j-footer-nav').removeClass('is-active');
    $('.footer__nav').attr('style','');
  }
});

function footerNav() {
  var link = $('.j-footer-nav');
  
  link.each(function(){
    var _this = $(this);
    
    _this.on('click', function(){
      var width = $(window).width();
      if (_this.hasClass('is-active') && width <= 991) {
        _this.removeClass('is-active');
        _this.next('.footer__nav').slideUp();
      } else if (!_this.hasClass('is-active') && width <= 991) {
        _this.addClass('is-active');
        _this.next('.footer__nav').slideDown();
      } else if (width >= 992) {
        return false
      }
    });
  })
}