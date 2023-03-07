$(function () {
    $('.single-item').slick({
        prevArrow: "<i class=\"fa-sharp fa-solid fa-chevron-left\"></i>",
        nextArrow: "<i class=\"fa-sharp fa-solid fa-chevron-right\"></i>",
        dots: true
    });
    $('.autoplay').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
          ]
      });
})

function openNav() {
    document.getElementById("myNav").style.width = "50%";
    document.querySelector(".active").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.querySelector(".active").style.display = "none";
  }
  