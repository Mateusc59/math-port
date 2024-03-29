import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
window.ScrollTrigger = ScrollTrigger;

document.addEventListener("DOMContentLoaded", function () {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      scrub: true,
      pin: true,
      start: "center center",
      end: "top -100%",
      toggleClass: { targets: ".hero", className: "active" },
    },
    ease: "power2.out",
  });
  ScrollTrigger.refresh();
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
