import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./web-components/custom-cursor/custom-cursor.js";
import "./web-components/custom-cursor/custom-cursor";
import "./swiper-fullscreen/swiper-fullscreen.js";
import Attributor from "./web-components/attributor/Attributor.js";

Attributor.init({
  mutationObserver: true,
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
