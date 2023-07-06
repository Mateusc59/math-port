<template>
  <NavBar />
  <router-view />
  <div class="container">
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
          <h1>{{ $t("main.title") }}</h1>
          <p>{{ $t("main.subtitle") }}</p>
          <button class="btn_download" data-cursor="hover">
            <a href="/cv.pdf" download="cv">{{ $t("main.resume") }}⬇ </a>
          </button>
        </div>
      </div>
    </div>
  </div>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__images">
        <div class="hero__content">
          <div class="hero__headline">
            <span>{{ $t("main.meet") }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="sectiontwo"></div>
  </section>
  <div class="Porfolio__container">
    <section>
      <div class="marquee">
        <ul class="marquee__content">
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
        </ul>
      </div>
    </section>
    <!--  <div class="Porfolio__home">
      <div>
             <p>Search projects</p>
 
      </div>
    </div> -->

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
            <h3>{{ $t("main.quote") }}</h3>
            <p class="active">
              {{ $t("main.quotetext") }}
            </p>
            <!-- <button class="btn_download on">
              <a href="https://codepen.io/mateusc59/pen/jOpVvzN">More info</a>
            </button> -->
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/quote.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>{{ $t("main.multi") }}</h3>
            <p class="active">
              {{ $t("main.multitext") }}
            </p>
            <button class="btn_download on">
              <a href="https://codepen.io/mateusc59/pen/LYBWdGM" target="_blank"
                >{{ $t("main.moreinfo") }}➡️
              </a>
            </button>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/multistep.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>{{ $t("main.tips") }}</h3>
            <p class="active">
              {{ $t("main.tipstext") }}
            </p>
            <button class="btn_download on">
              <a href="https://codepen.io/mateusc59/pen/qBKwRRV">More info</a>
            </button>
            <img alt="Vue" class="Porfolio__card_img" src="./assets/tips.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>{{ $t("main.review") }}</h3>
            <p class="active">
              {{ $t("main.reviewtext") }}
            </p>
            <button class="btn_download on">
              <a href="https://codepen.io/mateusc59/pen/vYrMymm">More info</a>
            </button>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/review.png"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>{{ $t("main.scan") }}</h3>
            <p class="active">
              {{ $t("main.scantext") }}
              <button class="btn_download on">
                <a href="https://codepen.io/mateusc59/pen/PoaVyRx">More info</a>
              </button>
            </p>
            <img alt="Vue" class="Porfolio__card_img" src="./assets/scan.png" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="Porfolio__card">
            <h3>{{ $t("main.more") }}</h3>
            <p class="active">
              {{ $t("main.moretext") }}
              <!--               <a href="https://codepen.io/mateusc59/pen/PoaVyRx">More info</a>
 -->
            </p>
            <img
              alt="Vue"
              class="Porfolio__card_img"
              src="./assets/code1.png"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <section>
      <div class="marquee marquee--reverse">
        <ul class="marquee__content">
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
          <li>
            <h2>{{ $t("main.projects") }}</h2>
          </li>
        </ul>
      </div>
    </section>
  </div>
  <div class="container second">
    <h2 class="container__headline">{{ $t("main.neat") }}.</h2>
  </div>
  <footer>
    <div class="Portfolio__border"></div>
    <h2>{{ $t("main.follow") }}</h2>
    <div class="Portfolio__icon" data-cursor="hover">
      <a href="https://www.instagram.com/hldemth/" target="_blank">
        <i class="fa-brands fa-instagram"></i
      ></a>
      <a href="https://github.com/Mateusc59" target="_blank"
        ><i class="fa-brands fa-github"></i
      ></a>
      <a href="http://www.linkedin.com/in/mathieu-hollande" target="_blank"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
    </div>
    <p id="sectionthree">
      {{ $t("main.credits") }}
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
