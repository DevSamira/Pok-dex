<template>
  <div class="body" v-show="this.showCard">
    <h1>Exibindo resultados para: {{ pokeName }}</h1>
    <div class="card">
      <div class="content">
        <img :src="pokeImage" alt="" class="pokephoto" />
        <div class="name">
          <p><strong>Nome:</strong> {{ pokeName }}</p>
        </div>
        <div class="habilities">
          <p><strong>Habilidades:</strong>{{ pokeAbilities }}</p>
        </div>
        <div class="species">
          <p><strong>Tipo:</strong> {{ pokeType }}</p>
        </div>
        <div class="height">
          <p><strong>ordem:</strong> {{ pokeOrder }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultComponent",
  required: false,
  props: {
    pokeName: null,
    pokeType: null,
    pokeOrder: null,
    pokeImage: null,
    pokeAbilities: null,
    showCard: Boolean,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
}

h1 {
  color: #fff;
  margin-top: 11rem;
}

.card {
  color: #000;
  font-weight: bold;
  margin: 4rem 0rem;
  background: linear-gradient(
    45deg,
    rgb(13, 173, 236) 0%,
    rgb(30, 219, 58) 100%
  );
  width: 18rem;
  border-radius: 2rem;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.308);
  animation: jump 2s infinite;
  animation-direction: alternate;
  transition: ease-in-out;
}

.card:hover {
  animation: none;
  cursor: pointer;
}

@keyframes jump {
  0% {
    margin-top: 10rem;
  }
  100% {
    margin-top: 7rem;
  }
}

.card strong {
  color: #fff;
}

.content {
  padding: 1rem;
  justify-content: center;
  text-align: center;
}
.pokephoto {
  width: 12rem;
  height: 12rem;
}
</style>