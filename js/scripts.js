/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
   });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

function fallbackCopyTextToClipboard(text) {
        swal ( "" ,  "Gagal copy rekening.. silakan copy manual.." ,  "error" )
    }

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        var bank = "unknown"
        switch(text) {
          case "1180279271":
            bank = "BNI"
            break
          case "1820006645022":
            bank = "Mandiri"
            break
          case "7148434306":
            bank = "BSM"
            break
        }
        swal("Berhasil copy rekening "+ bank, {
              buttons: false,
              timer: 750,
            });
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
        fallbackCopyTextToClipboard("hmm")
    });
}

var copyBniBtn = document.querySelector('.js-copy-bni-btn'),
    copyBcaBtn = document.querySelector('.js-copy-bca-btn'),
    copyBsmBtn = document.querySelector('.js-copy-bsm-btn'),
    copyMandiriBtn = document.querySelector('.js-copy-mandiri-btn')

copyBsmBtn.addEventListener('click', function(event) {
    copyTextToClipboard('7148434306');
});

copyMandiriBtn.addEventListener('click', function(event) {
    copyTextToClipboard('1820006645022');
});

copyBniBtn.addEventListener('click', function(event) {
    copyTextToClipboard('1180279271');
});