<template>
  <div class="home">
    <img alt="Vue logo" class="img_pea" src="../assets/logopea.png" />
    <HelloWorld msg="Welcome to my Pearfolio" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
}
.img_pea {
  margin-top: 150px;
}
</style>
