jQuery(document).ready(function($) {
  $(".slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".ttmn-prev"),
    nextArrow: $(".ttmn-next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".slider2").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".quote-prev"),
    nextArrow: $(".quote-next")
  });

  $(".js-open-list-link ").on("click", function() {
    if (
      $(this)
        .siblings(".js-list-link")
        .hasClass("open")
    ) {
      $(".js-list-link").removeClass("open");
    } else {
      $(".js-list-link").removeClass("open");
      $(this)
        .siblings(".js-list-link")
        .addClass("open");
    }
  });

  $(".header__mobile-btn").on("click", function() {
    $(".menu").addClass("open");
  });

  $(".btn-close-menu").on("click", function() {
    $(".menu").removeClass("open");
  });

  $(".video-inner").modalVideo();
});
