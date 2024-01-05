export function swiperr() {
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
  

  };

export function swiper(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 4,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}



