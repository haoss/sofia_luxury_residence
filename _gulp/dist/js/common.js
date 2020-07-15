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

  // Stop propagation
  $('.lang').on('click', function(e) {
    e.stopPropagation();
  });
  $('.m-search').on('click', function(e) {
    e.stopPropagation();
  });
  $('.nav').on('click', function(e) {
    e.stopPropagation();
  });

  $('.j-modal-btn').on('click', function(e) {
    var block = $(this).parent();
    
    if (block.hasClass('is-active')) {
      block.removeClass('is-active');
    } else {
      $('.j-modal-btn').parent().removeClass('is-active');
      block.addClass('is-active');
    }
  });

  $(document).on('click', function(e){
    $('.j-modal-btn').parent().removeClass('is-active');
  });

  // Footer menu mobile animation
  footerNav();
  inputFocus();
  countTest();

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
    $('.m-search').removeClass('is-active');
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

function inputFocus(){
  var jinput = $(".css-input");

  jinput.each(function(){
    var _this = $(this);
    var val = _this.val();
    var field = _this.parents('.j-field-text');

    if (val.length > 0 && _this.is('input') || val.length > 0 && _this.is('textarea')) {
      field.addClass("active-full");
    } else {
      field.removeClass("active-full");
    }

    // input on focus
    _this.focus(function () {
      field.addClass("active");
    }).blur(function () {
      field.removeClass("active");
    })

    _this.on('change', function () {
      var val = _this.val();

      if (val == '') {
        field.removeClass("active-full");
      } else {
        field.addClass("active-full");
      }
    });
  })
}

function countTest () {
  var block = $('.j-cart-count');

  block.each(function(){
    var _this = $(this);
    var plus = _this.find('.btn-plus');
    var minus = _this.find('.btn-minus');
    var input = _this.find('input');
    var value = input.val();

    plus.on('click', function(){
      value = parseFloat(value) + 1;
      input.val(value + ' чел');
    });
  
    minus.on('click', function(){
      if (value <= 1) return;
      value = parseFloat(value) - 1;
      input.val(value + ' чел');
    });
  })
}