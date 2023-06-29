import { createApp } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger from gsap/ScrollTrigger

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./web-components/custom-cursor/custom-cursor.js";
import "./web-components/custom-cursor/custom-cursor";
import "./swiper-fullscreen/swiper-fullscreen.js";

// Import  ScrollTrigger libraries
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  // GSAP animation code here
  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom -100%",
      toggleClass: "active",
      ease: "power2",
    },
  });

  gsap.to(".hero__headline", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
      ease: "power2",
    },
    y: "-30%",
  });
});

createApp(App).use(i18n).use(router).mount("#app");
// Select the HTML element you want to animate
/* const box = document.querySelector(".Portfolio__introduction__box");
 */
// Create a GSAP animation
/* gsap.to(box, { duration: 1, x: 0, y: 0, rotation: 360 });
 */
const cards = document.querySelectorAll(".Porfolio__card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Create a new element to hold the full screen content
    const fullScreenContainer = document.createElement("div");
    fullScreenContainer.classList.add("fullscreen-container");

    // Clone the card element and add it to the full screen container
    const fullScreenCard = card.cloneNode(true);
    fullScreenContainer.appendChild(fullScreenCard);

    // Add the full screen container to the body
    document.body.appendChild(fullScreenContainer);

    // Wait for the next frame and then add the "show" class to the full screen container
    requestAnimationFrame(() => {
      fullScreenContainer.classList.add("show");
    });

    // Add a click event listener to the full screen container
    fullScreenContainer.addEventListener("click", () => {
      // Remove the full screen container and show the original card element
      fullScreenContainer.classList.remove("show");
      fullScreenContainer.addEventListener("transitionend", () => {
        fullScreenContainer.remove();
      });
    });
  });
});
