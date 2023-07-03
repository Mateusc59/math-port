<template>
  <NavBar />
  <router-view />
  <header class="container">
    <div class="Porfolio__home container__headline" id="section">
      <div class="Porfolio__flexbox">
        <!--         <img alt="Vue" class="img_pea" src="./assets/Math.png" />   -->
        <video
          id="video"
          class="video"
          preload="metadata"
          autoplay
          muted
          loop
          playsinline
        >
          <source class="img_pea" src="./assets/math.mp4" type="video/mp4" />
          <source class="img_pea" src="./assets/mathi.mp4" type="video/mp4" />
          <source class="img_pea" src="./assets/math.webm" type="video/webm" />
          <source src="images/math.m4v" type="video/x-m4v" />

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
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__images">
        <div class="hero__content">
          <div class="hero__headline">
            <span>Nice to meet you !</span>
          </div>
        </div>
      </div>
    </div>
    <div id="sectiontwo"></div>
  </section>
  <div class="Porfolio__container">
    <div class="Porfolio__home">
      <div>
        <h2>Projects Portfolio</h2>
        <p>Search projects</p>
      </div>
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
            <h3>Quote Generator Api</h3>
            <p>
              Here is a small project where you can have a random quote if you
              feel in need ...<a href="https://codepen.io/mateusc59/pen/jOpVvzN"
                >More info</a
              >
            </p>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/quote.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>Multistep Form</h3>
            <p>
              Here is a small project where you can have a random quote if you
              feel in need ...<a href="https://codepen.io/mateusc59/pen/LYBWdGM"
                >More info</a
              >
            </p>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/multistep.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>Tips Calcultator</h3>
            <p>
              Here is a small project where you can have a random quote if you
              feel in need ...<a href="https://codepen.io/mateusc59/pen/qBKwRRV"
                >More info</a
              >
            </p>
            <img alt="Vue" class="Porfolio__card_img" src="./assets/tips.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>Review</h3>
            <p>
              Here is a small project where you can submit a review ...<a
                href="https://codepen.io/mateusc59/pen/vYrMymm"
                >More info</a
              >
            </p>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/review.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>Scan me</h3>
            <p>
              Just in case you need more information you can scan me
              <a href="https://codepen.io/mateusc59/pen/PoaVyRx">More info</a>
            </p>
            <img alt="Vue" class="Porfolio__card_img" src="./assets/scan.png" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="container second">
    <h2 class="container__headline">That's pretty neat.</h2>
  </div>
  <footer>
    <div class="Portfolio__border"></div>
    <h2>Follow me</h2>
    <div class="Portfolio__icon" data-cursor="hover">
      <i class="fa-brands fa-instagram"
        ><a href="https://www.instagram.com/hldemth/" target="_blank"></a
      ></i>
      <i class="fa-brands fa-github"
        ><a href="https://github.com/Mateusc59" target="_blank"></a
      ></i>
      <i class="fa-brands fa-linkedin"
        ><a
          href="http://www.linkedin.com/in/mathieu-hollande"
          target="_blank"
        ></a
      ></i>
    </div>
    <p id="sectionthree">
      © 2022. Vue.js & CSS Portfolio. Developed by Mathieu.H
    </p>
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
