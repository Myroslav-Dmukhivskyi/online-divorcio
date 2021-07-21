$(function () {
  $(".reviews__carousel").slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<div class="prev-arrow"><img src="./images/prev-arrow.svg" alt="previous"></div>',
    nextArrow:
      '<div class="next-arrow"><img src="./images/next-arrow.svg" alt="next"></div>',
    // responsive: [
    //     {
    //       breakpoint: 841,
    //       settings: {
    //         slidesToShow: 2
    //       }
    //     },
    //     {
    //       breakpoint: 501,
    //       settings: {
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
  });
});
