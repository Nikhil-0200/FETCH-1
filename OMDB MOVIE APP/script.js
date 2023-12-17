function counting(){


let tl = gsap.timeline();

tl
  .from("#lowest",{
    onStart: function(){
        $('#lowest').textillate({ 
            in: { effect: "fadeInUp", },
            callback: function(){
                $('#lowest').textillate("out")
            },  
            out: {effect: "fadeOutUp"}
         });
    }
})

.from("#sec-lowest",{
    opacity: 0,
    delay: 1,
    onStart: function(){
        $('#sec-lowest').textillate({ 
            in: { effect: "fadeInUp" },
            callback: function(){
                $('#sec-lowest').textillate("out")
            },  
            out: {effect: "fadeOutUp"}
         });
    }
})

.from("#sec-top",{
    opacity: 0,
    delay: 1,
    onStart: function(){
        $('#sec-top').textillate({ 
            in: { effect: "fadeInUp" },
            callback: function(){
                $('#sec-top').textillate("out")
            },  
            out: {effect: "fadeOutUp"}
         });
    }
})

.from("#top",{
    opacity: 0,
    delay: 1,
    onStart: function(){
        $('#top').textillate({ 
            in: { effect: "fadeInUp" },  
         });
    }
})

.to("#top-screen",{
    top: "-100%",
    delay: 1,
    duration: 1.2,
    ease: "power4.out",
})

}



counting()

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
      },
      thumbs: {
        swiper: swiper,
      },
      controller: {
        control: swiper, // Connect swiper2 to swiper
        by: "slide", // Use "slide" for control
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      },
    });
  

  });
  
  