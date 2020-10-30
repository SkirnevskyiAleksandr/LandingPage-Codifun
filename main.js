 $(".navbar-collapse a").on("click",function(){
   $(".navbar-collapse").collapse("hide");
 });

 $(window).scroll (function(){
   if ($(".navbar").offset().top>50){
     $(".navbar-fixed-top").addClass("top-nav-collapse");
   }else{
     $(".navbar-fixed-top").removeClass("top-nav-collapse");
   }
 });

 $('.home-slider ').owlCarousel({
  animateOut: 'fadeOut',
  items: 1,
  loop: true,
  dots: false,
  autoplayHoverPause: false,
  autoplay: false,
  smartSpeed: 1000, 
})

// popular courses
$('.owl-courses').owlCarousel({
  animateOut: 'fadeOut',
  loop: true,
  autoplayHoverPause: false,
  autoplay: false,
  smartSpeed: 1000,
  dots: false,
  nav:false,
  navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
     1000: {
      items: 3,
        }
    }
});

$('.owl-client').owlCarousel({
animateOut: 'fadeOut',
loop: true,
autoHeight:true,
autoplayHoverPause: false,
autoplay: false,
smartSpeed: 1000,
responsiveClass: true,
responsive: {
0: {
  items: 1,
},
1000: {
  items: 3,
}
}
});

