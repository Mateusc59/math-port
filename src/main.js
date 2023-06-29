import { createApp } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./web-components/custom-cursor/custom-cursor.js";
import "./web-components/custom-cursor/custom-cursor";
import "./swiper-fullscreen/swiper-fullscreen.js";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom -100%",
      toggleClass: { targets: ".hero", className: "active" },
      markers: true, // Optional: Add markers to visualize the trigger
      invalidateOnRefresh: true, // Optional: Invalidate the ScrollTrigger on refresh
    },
    ease: "power2",
  });

  gsap.to(".hero__headline", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      markers: true, // Optional
      invalidateOnRefresh: true, // Optional
    },
    y: "-30%",
    ease: "power2",
  });
});

createApp(App).use(i18n).use(router).mount("#app");

const cards = document.querySelectorAll(".Porfolio__card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const fullScreenContainer = document.createElement("div");
    fullScreenContainer.classList.add("fullscreen-container");

    const fullScreenCard = card.cloneNode(true);
    fullScreenContainer.appendChild(fullScreenCard);

    document.body.appendChild(fullScreenContainer);

    requestAnimationFrame(() => {
      fullScreenContainer.classList.add("show");
    });

    fullScreenContainer.addEventListener("click", () => {
      fullScreenContainer.classList.remove("show");
      fullScreenContainer.addEventListener("transitionend", () => {
        fullScreenContainer.remove();
      });
    });
  });
});
