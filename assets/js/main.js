$(document).ready(function () {

  /**
   * Single SLider
   */
  $("#single-carousel").slick({
    centerMode: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
    ],
  });

  /**
   *  Dual Slider
   */

  $(".slide-preview").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slide-thumb",
  });

  $(".slide-thumb").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "30%",
    slidesToScroll: 1,
    asNavFor: ".slide-preview",
    dots: true,
    arrows: false,
    focusOnSelect: true,
  });

});
