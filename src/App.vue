<template>
  <NavBar />
  <router-view />
  <header class="container">
    <div class="Porfolio__home container__headline">
      <div class="Porfolio__flexbox">
        <!--         <img alt="Vue" class="img_pea" src="./assets/Math.png" />
 -->
        <video autoplay muted>
          <source class="img_pea" src="./assets/math.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div class="Portfolio__introduction__box">
          <h1>Hi, I'm Mathieu</h1>
          <p>Frontend developer & Css lover</p>
          <button class="btn_download" data-cursor="hover">
            <a href="/cv.pdf" download="cv">Resume ⬇ </a>
          </button>
        </div>
      </div>
    </div>
  </header>
  <section class="container hero">
    <div class="hero__inner">
      <div class="hero__images">
        <div class="hero__content">
          <div class="hero__headline">
            <span>Nice to meet you !</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="Porfolio__container">
    <div class="Porfolio__home"></div>
    <div>
      <h2>Projects Portfolio</h2>
      <p>Search projects</p>
    </div>

    <div class="Porfolio__project">
      <swiper
        slides-per-view="3"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :loop="true"
        :autoplay="{ delay: 2500 }"
      >
        <swiper-slide>
          <div class="Porfolio__card">
            <p>Quote Generator Api</p>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/quote.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <p>Multistep Form</p>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/multistep.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <p>Tips Calcultator</p>
            <img alt="Vue" class="Porfolio__card_img" src="./assets/tips.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/code1.png"
            />
            <p>My Name Project</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/code1.png"
            />
            <p>My Name Project</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/code1.png"
            />
            <p>My Name Project</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <footer>
      <div class="Portfolio__border"></div>
      <h2>Follow me</h2>
      <div class="Portfolio__icon">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-gitlab"></i>
        <i class="fa-brands fa-github"></i>
      </div>
      <p>© 2022. Vue.js & CSS Portfolio. Developed by Mathieu.H</p>
    </footer>
  </div>
  <footer class="container second">
    <h2 class="container__headline">That's pretty neat.</h2>
  </footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "./web-components/custom-cursor/custom-cursor";
import "./swiper-fullscreen/swiper-fullscreen";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper/core";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Autoplay]);

export default {
  name: "App",
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      /*       console.log("slide change");
       */
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss">
@import "main.scss";
</style>
