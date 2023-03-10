const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
  el: ".swiper-pagination",
  dynamicBullets: false,
},
breakpoints: {
  1000: {
    slidesPerView: 2,
  },
}
});

  const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    slidesPerView: 2,
    speed:3000,
    autoHeight: true,
    loop:true,
    autoplay: {
      delay: 2000,
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
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40
      },
    }
  });