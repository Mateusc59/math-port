<template>
  <NavBar />
  <router-view />
  <div class="home__container">
    <div class="home">
      <div class="flexbox">
        <img alt="Vue" class="img_pea" src="./assets/logopea.png" />
        <div class="introduction__box">
          <h1>Hi, I'm Mathieu</h1>
          <p>Frontend developer & Css lover</p>
          <button class="btn_download">
            <a href="/cv.pdf" download="cv">Resume ⬇ </a>
          </button>
        </div>
      </div>
    </div>
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
  height: 150vh;
  position: relative;
  background-color: #639d63;
}

.home {
  border: 1px solid red;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.flexbox {
  border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 745px) {
    background-color: lightblue;
    flex-direction: column-reverse;
  }
}

.img_pea {
  /* margin-top: 150px;
  height: 25%; */
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
