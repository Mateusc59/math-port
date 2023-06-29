import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    },
    ease: "power2.out",
  });

  gsap.to(".hero__headline", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: 0.5,
      start: "top bottom",
      end: "bottom -300%",
    },
    y: "-30%",
    ease: "power2.out",
  });
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
