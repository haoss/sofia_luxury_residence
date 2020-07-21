'use strict';

// Document ready
$(document).on('ready', function(){

  // Open custom modal 
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true
  });

  $('.js-popup-yamaps').magnificPopup({
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
  // One apartment carousel
  oneCarousel();

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
  $('.datepicker-div').datepicker().on('changeDate', function(ev) {
    // YOUR CODE
  }).on('hide', function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
  $('.datepicker-input').datepicker({
    autoClose: true
  });

  $('.insta__carousel').slick({
    mobileFirst: true,
    dots: false,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    variableWidth: true,
  });

  var slick1 = $('.j-gallery-one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.j-gallery-thumb'
  });
  var slick2 = $('.j-gallery-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.j-gallery-one',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('.j-open-gallery').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function(){
        slick1.slick('refresh');
        slick2.slick('refresh');
        // setTimeout(function(){
        //   slick1.slick('refresh');
        //   slick2.slick('refresh');
        // }, 300)
      }
    }
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

  oneCarousel();
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
  $(document).on('click', '.lang, .m-search, .nav, .d-search', function(e){
    e.stopPropagation();
  });
}

function oneCarousel() {
  var width = $(window).width();

  var $slickElementPagination = $('.one-apartment__carousel-pagination');
  var $slickElement = $('.j-one-apartment');

  if (width <= 767) {
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $slickElementPagination.text(i + ' / ' + slick.slideCount);
    });  
    $slickElement.not('.slick-initialized').slick({
      mobileFirst: true,
      arrows: false,
      infinite: true,
      dots: false
    });
  } else {
    if($slickElement.hasClass('slick-initialized')){
      $slickElement.slick('unslick');
    }
  }
  
}