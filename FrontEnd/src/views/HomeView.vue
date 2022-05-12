<template>
  <div class="home">
    <h1>Comece sua busca!</h1>
    <search-component />
  </div>
</template>

<script>
import SearchComponent from "../components/SearchComponent.vue";

export default {
  name: "HomeView",
  components: {
    SearchComponent,
  },
};
</script>

<style scoped>
h1 {
  padding-top: 7rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.home {
  margin-bottom: 10rem;
  margin-top: 0rem;
}
</style>
