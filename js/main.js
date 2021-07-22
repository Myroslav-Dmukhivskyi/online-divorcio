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
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows:false,
            dots: true,
            slidesToShow: 1
          }
        }
      ]
  });
});
