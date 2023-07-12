<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav>
      <div class="branding">
        <h3>Mathieu Hollande</h3>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link
            class="link"
            :to="{ name: 'Home' }"
            @click="scrollToSection('#section')"
            >{{ $t("nav.home") }}</router-link
          >
        </li>
        <!--  <li>
          <router-link
            class="link"
            :to="{ name: '' }"
            @click="scrollToSection('#sectionone')"
            >{{ $t("nav.about") }}</router-link
          >
        </li> -->
        <li>
          <router-link
            class="link"
            :to="{ name: '' }"
            @click="scrollToSection('#sectiontwo')"
            >{{ $t("nav.portfolio") }}</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            :to="{ name: '' }"
            @click="scrollToSection('#sectionthree')"
            >{{ $t("nav.contact") }}</router-link
          >
        </li>
      </ul>
      <LocaleSwitcher v-if="!mobile" />
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link
              class="link"
              :to="{ name: 'Home' }"
              @click="scrollToSection('#section')"
              >{{ $t("nav.home") }}</router-link
            >
          </li>
          <!--  <li>
            <router-link class="link" :to="{ name: '' }">About</router-link>
          </li> -->
          <li>
            <router-link
              class="link"
              :to="{ name: '' }"
              @click="scrollToSection('#sectiontwo')"
              >{{ $t("nav.portfolio") }}</router-link
            >
          </li>
          <li>
            <router-link
              class="link"
              :to="{ name: '' }"
              @click="scrollToSection('#sectionthree')"
              >{{ $t("nav.contact") }}</router-link
            >
          </li>
          <LocaleSwitcher />
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  components: { LocaleSwitcher },

  name: "NavBar",
  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    scrollToSection(sectionId) {
      if (sectionId !== "") {
        event.preventDefault();
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });

          // Remove the 'active' class from the mobile navigation icon
          this.mobileNav = false;
        }
      }
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(234, 234, 234, 0.3);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;
    padding: 12px;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }
    @media (max-width: 740px) {
      padding: 32px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
      margin: 0;
      &:hover {
      }
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
      text-align: left;
      &:hover {
      }
      a {
        &:hover {
        }
      }
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: blue;
        border-color: #2c3e50;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      h3 {
        font-family: "Myfont";
        letter-spacing: 1px;
        color: #000;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;

      .link {
        color: #000;
        &:hover {
        }
      }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      color: #000;
      i {
        font-size: 24px;
        transition: 0.8s ease all;
        &:hover {
        }
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      /* From https://css.glass */
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      top: 0;
      left: 0;
    }

    li {
      margin-left: 0;

      .link {
        color: black;
      }
    }

    .dropdown-nav .link {
      display: flex;
      flex-direction: row;
    }

    .mobile-nav-enter-active,
    .mobile-nav-enter-leave {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background-color: #ffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) 0 2px 4px -1px
    rgba(0, 0, 0, 0.06);

  .link {
    font-weight: 500;
    color: #2c3e50 !important;
    list-style: none;
    text-decoration: none;
    margin: 0;
  }

  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) 0 2px 4px -1px
          rgba(0, 0, 0, 0.06);
      }
    }
  }
}
</style>
