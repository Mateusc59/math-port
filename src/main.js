import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./web-components/custom-cursor/custom-cursor.js";
import "./web-components/custom-cursor/custom-cursor";
import "./swiper-fullscreen/swiper-fullscreen.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: { targets: ".hero", className: "active" },
  },
  ease: "power2.out",
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
