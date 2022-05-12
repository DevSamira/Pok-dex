<template>
  <body>
    <nav-bar />
    <footer-component />
  </body>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    NavBar,
    FooterComponent,
  },
};
</script>

<style scoped>
body {
  font-family: sans-serif;
  background-image: url("@/assets/img/pokebola.png");
  background-repeat: no-repeat;
  background-color: #2ac7da;
  background-position-x: -8rem;
  background-position-y: 1rem;
  background-size: 45%;
  background-attachment: fixed;
}

@media only screen and (max-width: 568px) {
  body {
    background-size: 100%;
  }
}
</style>
