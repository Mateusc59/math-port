import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  gsap.timeline({
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
