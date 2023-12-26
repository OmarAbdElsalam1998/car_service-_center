///make header sticky and change background color when user scroll
let header=document.querySelector("header nav");
window.onscroll=function(){
    if(this.scrollY > 10){
        header.classList.add("sticky-nav")


    }
    else{
        header.classList.remove("sticky-nav")



    }

}

//handle click on scroll down button in bottom of main banner
let scrollDowm=document.querySelector("header .scroll-down");
let navBar=document.querySelector("header nav").offsetHeight;
scrollDowm.addEventListener("click",function(){
  aboutusOffsetTop=document.querySelector(".our-services").offsetTop
  console.log(navBar +" "+aboutusOffsetTop +" "+window.pageYOffset );

  window.scrollBy({
    top: aboutusOffsetTop - window.pageYOffset - navBar,
    behavior : "smooth"
})
})



  $('#our-customers').owlCarousel({
    stagePadding: 0,
    rtl:true,
    loop:true,
    margin:10,
    nav: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout:2000,
    autoplaySpeed: 3000,
    
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  rewindNav:false,
  autoplay: true,
  rtl:true,
  dots:true,

  navText: [
    "<img src='assets/images/left-arrow.webp'>",
    "<img src='assets/images/right-arrow.webp'>"
  ],
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    1000: {
      items: 4
    },
    1600:{
      items:5
    }
  },

  
  
})