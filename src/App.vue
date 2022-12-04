<template>
  <NavBar />
  <router-view />
  <div class="Porfolio__container">
    <div class="Porfolio__home">
      <div class="Porfolio__flexbox">
        <img alt="Vue" class="img_pea" src="./assets/code1.png" />
        <div class="Portfolio__introduction__box">
          <h1>Hi, I'm Mathieu</h1>
          <p>Frontend developer & Css lover</p>
          <button class="btn_download">
            <a href="/cv.pdf" download="cv">Resume ⬇ </a>
          </button>
        </div>
      </div>
    </div>
    <div>
      <h2>Projects Portfolio</h2>
      <p>Search projects</p>
    </div>
    <div class="Porfolio__project">
      <div class="Porfolio__card">
        <img alt="Vue" class="Porfolio__card_img" src="./assets/code1.png" />
        <p>My Name Project</p>
      </div>
      <div class="Porfolio__card">
        <img alt="Vue" class="Porfolio__card_img" src="./assets/code1.png" />
        <p>My Name Project</p>
      </div>
      <div class="Porfolio__card">
        <img alt="Vue" class="Porfolio__card_img" src="./assets/code1.png" />
        <p>My Name Project</p>
      </div>
      <div class="Porfolio__card">
        <img alt="Vue" class="Porfolio__card_img" src="./assets/code1.png" />
        <p>My Name Project</p>
      </div>
    </div>
    <footer>
      <div class="Portfolio__border"></div>
      <h2>Follow me</h2>
      <div class="Portfolio__icon">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-gitlab"></i>
        <i class="fa-brands fa-github"></i>
      </div>
      <p>© 2022. Vue.js & CSS Portfolio. Developed by Mathieu.H</p>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  height: 100%;
  position: relative;
  background-color: #639d63;
  overflow: hidden;
  @media only screen and (max-width: 845px) {
    background-color: lightblue;
    flex-direction: column-reverse;
  }
}

.Porfolio__ {
  &home {
    border: 1px solid red;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 0px;
    @media only screen and (max-width: 845px) {
      padding-top: 70px;
    }
  }
  &flexbox {
    border: 1px solid blue;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 50px;

    @media only screen and (max-width: 845px) {
      background-color: lightblue;
      flex-direction: column-reverse;
      padding-top: 0px;
    }
  }
  h1 {
    font-size: 32px;
  }

  &project {
    border: 1px solid gold;
    display: flex;
    flex-wrap: wrap;
  }
  &card {
    width: 400px;
    height: 330px;
    background-color: #fff;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 20px;
  }
  &card_img {
    width: 50%;
  }
  p {
    font-weight: 700;
  }
}

footer {
  width: 100%;
  height: 100%;
  margin: auto;
  .Portfolio {
    &__border {
      width: 500px;
      margin: auto;
      border: 1px solid #fff;
      opacity: 0.4;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    &__icon {
      i {
        margin: 10px;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
          color: #fff;
          opacity: 0.9;
          transition: 0.5s;
        }
      }
    }
  }
  p {
    padding-top: 50px;
    font-weight: 500;
  }
}
.img_pea {
  width: 600px;
  @media (max-width: 875px) {
    width: 300px;
  }
}

/* Button */

.btn_download {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.41);
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  border: 1px solid rgba(255, 255, 255, 0.59);

  :hover {
    cursor: pointer;
    color: #2c3e50;
    transition: all 0.3s ease-in-out;
  }
}

a {
  text-decoration: none;
  font-size: 15px;
  color: white;
  padding: 20px;
}
</style>
