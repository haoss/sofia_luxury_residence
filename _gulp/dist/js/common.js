'use strict';

// Document ready
$(document).on('ready', function(){

  // Open custom modal 
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true
  });

  $('.popup-yamaps').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#yamaps'
	});

  // Modal open
  modal();
  // Footer menu mobile animation
  footerNav();
  // Input focus animate
  inputFocus();
  // Header scroll
  headerScroll();

  // Test function
  countTest();
  dateTest();

  // Gallery list carousel
  $('.j-gallery-row').slick({
    mobileFirst: true,
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  });

  // Services list carousel
  $('.j-services-row').slick({
    mobileFirst: true,
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  });

  // Gallery list carousel
  $('.j-gallery-list').slick({
    mobileFirst: true,
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  });

  // Gallery fix
  $('[data-fancybox="gallery"]').fancybox({
    backFocus: false
  });

  // Datepicker fix
  $('.datepicker-input').datepicker({
    autoClose: true
  });

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

$(window).on('scroll', function() {
  // Header scroll
  headerScroll();
});

$(window).on('resize', function() {
  var width = $(window).width();
  
  if (width >= 992) {
    $('.j-footer-nav').removeClass('is-active');
    $('.m-search').removeClass('is-active');
    $('body').removeClass('is-fixed');
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
  var block = $('.j-people-count');

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
  });
}

function dateTest() {
  var btnDateTest = $('.j-m-date-test');
  var btnCountTest = $('.j-m-count-test');
  
  btnDateTest.on('click', function() {
    $('[data-date="from"]').addClass('is-fill').text('10.07');
    $('[data-date="to"]').addClass('is-fill').text('19.07');
  });

  btnCountTest.on('click', function() {
    btnCountTest.addClass('is-fill').text('4 чел');
  });
}

function headerScroll() {
  var header = $('.header');
  var width = $(window).width();

  if ($(window).scrollTop() > header.height()) {
    header.addClass('is-scroll');
  } else {
    header.removeClass('is-scroll');
  }
}

function modal() {
  // Modal open
  $('.j-modal-btn').on('click', function(e) {
    var block = $(this).parent();
    var body = $('body');
    
    if (block.hasClass('is-active')) {
      block.removeClass('is-active');
      body.removeClass('is-fixed');
    } else {
      $('.j-modal-btn').parent().removeClass('is-active');
      block.addClass('is-active');
      body.addClass('is-fixed');
    }
  });

  // Click cancel
  $(document).on('click', function(e){
    $('.j-modal-btn').parent().removeClass('is-active');
    $('body').removeClass('is-fixed');
  });

  // Blocks click stoped fix
  $(document).on('click', '.lang, .m-search, .nav, .d-search, .d-search .datepicker-here', function(e){
    e.stopPropagation();
  });
}