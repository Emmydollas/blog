const reponsive = {
   0: {
      items:1
   },
   320: {
      items:1
   },
   560: {
      items:2
   },
   960: {
      items:3
   },
};

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {

   navbarLinks.classList.toggle('active')

});

$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
      responsive:reponsive,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      dots:false,
      nav:true,
      navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
      
   });

   $('.move-up span').click(function(){
   $('html,body').animate({
      scrollTop:0
   },1000);
   })

});