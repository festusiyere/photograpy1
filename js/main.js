$(document).ready(function(){
  $('.slider1').slick({
    autoplay: true,
    accessibility: false,
    arrows: false,
    cssEase: 'linear',
    easing: 'linear',
    autoplaySpeed: 3000,
    speed: 2000,
    swipeToSlide: true,
    fade: true
  });

});
ScrollReveal({
   reset: true,
   delay    : 100,
   distance : '120px',
   easing   : 'ease',
   duration: 2000
 });
 $(document).ready(function() {
 //Preloader
 $(window).on("load", function() {
 preloaderFadeOutTime = 500;
 function hidePreloader() {
 var preloader = $('.spinner-wrapper');
 preloader.fadeOut(preloaderFadeOutTime);
 }
 hidePreloader();
 });
 });
