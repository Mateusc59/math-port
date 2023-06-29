import "swiper/scss";
import "./swiper-fullscreen.scss";
import gsap from "gsap";
import Swiper from "swiper";
import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
const template = document.createElement("template");
template.innerHTML = /* html */ `
    <style>
        .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            pointer-events: none;
            opacity: 0;
            transition: 1s opacity linear;
        }

        .background--in {
            opacity: 1;
        }

        .close-btn {
            width: 50px;
            height: 50px;
            background: red;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 100;
            pointer-events: none;
            opacity: 0;
            transition: 1s opacity linear;
        }

        .close-btn--in {
            opacity: 1;
            pointer-events: auto;
        }
    </style>
    <div class="background"></div>
    <div class="close-btn"></div>
    <slot></slot>
`;

class SwiperFullscreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.current_slide = null;
    this.resize_timeout = null;
    this.close_btn = this.shadowRoot.querySelector(".close-btn");

    this.swiper = new Swiper(this.querySelector(".swiper"), {
      speed: 1000,
      spaceBetween: 0,
      centeredSlides: true,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1000: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
      },
    });

    this.swiper.on("click", (swiper, evt) => {
      let slide;
      let child = evt.target;
      for (let i = 0; i < 3; i++) {
        let parent = child.parentElement;
        if (parent.classList.contains("swiper-slide")) {
          slide = parent;
          break;
        }
        child = parent;
      }
      if (!slide) {
        console.error("[swiper-fullscreen] Slide not found");
      } else {
        this.openSlide(slide);
      }
    });

    this.closeRef = this.close.bind(this);
    this.close_btn.addEventListener("click", this.closeRef);

    window.addEventListener(
      "resize",
      this.calculateFullscreenValues.bind(this)
    );

    this.swiper.on("transitionEnd", () => {
      this.calculateFullscreenValues();
      this.updateSlideTransform();
    });
  }

  openSlide(slide) {
    if (this.current_slide) {
      return;
    }

    //scrollHandler.disable();
    lenis.stop();
    lenis.blockScroll();
    this.swiper.disable();

    this.current_slide = slide;

    this.close_btn.classList.add("close-btn--in");

    this.shadowRoot
      .querySelector(".background")
      .classList.add("background--in");
    for (let u = 0; u < this.swiper.slides.length; u++) {
      if (this.swiper.slides[u] != slide) {
        this.swiper.slides[u].classList.add("swiper-slide--disabled");
      }
    }

    gsap.set(slide, { zIndex: 100 });

    this.calculateFullscreenValues();

    // Using dummy tween + onUpdate pattern to allow for dynamic changes of values.
    // Useful if the screen is resized in the middle of the tween.
    this.opening_tween = gsap.to(
      {},
      {
        duration: 1,
        ease: "power3.inOut",
        onUpdate: () => {
          if (!this.fullscreen_values) {
            return;
          }
          this.updateSlideTransform();
        },
        onComplete: () => {
          this.opening_tween.kill();
          this.opening_tween = null;
        },
      }
    );
  }

  calculateFullscreenValues() {
    if (!this.current_slide) {
      return;
    }

    let timeout = this.opening_tween ? 50 : 0;

    clearTimeout(this.resize_timeout);
    this.resize_timeout = setTimeout(() => {
      const window_width = document.body.clientWidth;
      const window_height = document.documentElement.clientHeight;
      gsap.set(this.current_slide, { clearProps: "scale" }); // note: "scale" (or any transform-related property) clears all transforms
      const bb = this.current_slide.getBoundingClientRect();
      const screen_ratio = window_width / window_height;
      const slide_ratio = bb.width / bb.height;
      let scale = 1;

      if (screen_ratio >= slide_ratio) {
        // landscape
        scale = window_height / bb.height;
      } else {
        // portrait
        scale = window_width / bb.width;
      }

      this.fullscreen_values = {
        scale,
        x: -(bb.x + bb.width / 2 - window_width / 2),
        y: -(bb.y + bb.height / 2 - window_height / 2),
      };

      this.updateSlideTransform();
    }, timeout);
  }

  updateSlideTransform() {
    if (!this.current_slide) {
      return;
    }
    const progress = this.opening_tween?.ratio || 1;
    gsap.set(this.current_slide, {
      x: gsap.utils.interpolate(0, this.fullscreen_values.x, progress),
      y: gsap.utils.interpolate(0, this.fullscreen_values.y, progress),
      scale: gsap.utils.interpolate(1, this.fullscreen_values.scale, progress),
    });
  }

  close() {
    this.close_btn.classList.remove("close-btn--in");

    if (this.opening_tween) {
      this.opening_tween.pause();
      this.opening_tween.kill();
      this.opening_tween = null;
    }

    this.shadowRoot
      .querySelector(".background")
      .classList.remove("background--in");
    for (let u = 0; u < this.swiper.slides.length; u++) {
      this.swiper.slides[u].classList.remove("swiper-slide--disabled");
    }

    gsap.to(this.current_slide, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(this.current_slide, { clearProps: "z-index" });
        this.current_slide = null;
      },
    });

    //scrollHandler.enable();
    lenis.start();
    this.swiper.enable();
  }
}

window.customElements.define("swiper-fullscreen", SwiperFullscreen);
