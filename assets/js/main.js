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

  /**
   * Customized box preview
   */

  $(".customized-addons-slide").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "18%",
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
  });

  /**
   * Add title on Box
   */
  let titlePrviewBox = $(".customized-box-preview-inner img");
  let checkBox = $(".box-title input");

  checkBox.on("click", function () {
    checkBox.prop("checked", false);
    $(this).prop("checked", true);

    let getTitle = $(this).data("title");

    titlePrviewBox.attr(
      "src",
      "assets/images/slide-marlboro-with-mic-" + getTitle + ".png"
    );
  });

  /**
   * Background Image checkbox
   */
  let boxBgPreview = $(".box-bg-addon .bg-preview");
  let boxBgcheckBox = $(".box-bg-addon .item-inner input");

  boxBgcheckBox.on('click', function () {
    boxBgcheckBox.prop("checked", false);
    $(this).prop("checked", true);

    let getBg = $(this).data("background");

    console.log(getBg);

    boxBgPreview.attr(
      "style",
      "background-image: url(assets/images/"+ getBg +");"
    );
  });

  //
});
