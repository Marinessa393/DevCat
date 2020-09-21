$(document).ready(function(){

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnFocus: true,
  pauseOnHover: true,
  responsive:[
    {
      breakpoint: 280,
      settings: {
        variableWidth: false
      }
    }
    ,{
      breakpoint: 768,
      settings: {
        variableWidth: true
      }
    }
    ,{
      breakpoint: 1344,
      settings: {
        variableWidth: true
      }
    }
  ]
});
});
