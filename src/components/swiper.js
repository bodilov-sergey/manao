import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const swiperPublications = document.querySelector("[data-publications-swiper]");

const swiper = () => {
  if (swiperPublications) {
    new Swiper(swiperPublications, {
      modules: [Navigation],
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 24,
      slidesPerView: 1.3,
      loop: true,
      navigation: {
        prevEl: ".publications__swiper-button--prev",
        nextEl: ".publications__swiper-button--next",
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }
};

export default swiper;
