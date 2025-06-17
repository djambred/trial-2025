(function ($) {
  "use strict";

  // 🟢 Page Preloader
  $(window).on('load', function () {
    $('#js-preloader').addClass('loaded');

    if ($('.cover').length) {
      $('.cover').parallax({
        imageSrc: $('.cover').data('image'),
        zIndex: '1'
      });
    }

    $("#preloader").animate({ 'opacity': '0' }, 600, function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    });
  });

  // 🟢 Header Background on Scroll
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let box = $('.header-text').height();
    let header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  // 🟢 Responsive Reload on Width Change
  let width = $(window).width();
  $(window).resize(function () {
    if ((width > 767 && $(window).width() < 767) || (width < 767 && $(window).width() > 767)) {
      location.reload();
    }
  });

  // 🟢 Owl Carousel Setup
  $(document).ready(function () {
    $('.owl-banner').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      margin: 30
    });

    $('.owl-testimonials').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      margin: 30
    });
  });

  // 🟢 Mobile Menu Toggle
  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }

  // 🟢 Smooth Scroll to Sections
  $('.scroll-to-section a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 700);
    }

    // Collapse nav on mobile
    if ($(window).width() < 767) {
      $('.menu-trigger').removeClass('active');
      $('.header-area .nav').slideUp(200);
    }
  });

  // 🟢 Scrollspy Active Menu
  function onScroll() {
    const scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr("href"));
      if (refElement.length) {
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $('.nav a').removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      }
    });
  }

  $(document).ready(function () {
    $(document).on("scroll", onScroll);
  });



})(jQuery);
