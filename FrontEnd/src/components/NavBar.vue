<template>
  <nav class="fix">
    <img src="img/Pokedex_DP.png" alt="Logo site" class="logo" />
    <p>Pokédex</p>
    <div class="routes">
      <router-link to="/" class="route">Pesquisa por nome</router-link>
      <router-link to="/thanks" class="route">Agradecimentos</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #c5db5f;
  display: flex;
  align-items: center;
  height: 3.5rem;
  box-shadow: 0px 3px rgba(0, 0, 0, 0.356);
}

.routes {
  width: 60rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
}

.route {
  font-weight: 3;
  text-decoration: none;
  color: #696969;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
}

.route:hover {
  color: white;
  cursor: pointer;
  background-color: #92ad1a;
}

.logo {
  width: 2rem;
  height: 2rem;
  margin-left: 8%;
}

p {
  text-shadow: 4px 3px #125;
  color: #fff;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-left: 1rem;
  font-size: 2rem;
}

p:hover {
  cursor: pointer;
}
</style>