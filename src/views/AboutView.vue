<template>
  <button class="click-here" @click="showCard()">Clique aqui</button>
  <div class="card" v-show="openCard">
    <div class="card-content">
      <img class="gif" src="img/pokémon-happy.gif" alt="Gif Pokémon" />
      <p class="text-1">
        Esse desafio me ajudou bastante a descobrir que fazia coisas<br />
        que sequer imaginava !
      </p>
      <p class="thanks-text">
        <i>MUITO OBRIGADA</i><br />
        <strong>Pela oportunidade!</strong>
      </p>
      <button class="close" @click="showCard()">Fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openCard: false,
    };
  },
  methods: {
    showCard() {
      this.openCard = !this.openCard;
    },
  },
};
</script>

<style scoped>
.click-here {
  width: 8rem;
  color: #696969;
  margin-left: 45vw;
  margin-top: 6rem;
  padding: 1.5rem;
  margin-bottom: 24.2rem;
  background-image: url("@/assets/img/pokebola.png");
  background-repeat: repeat-y;
  background-color: #c5db5f;
  border: none;
  border-radius: 1rem;
  animation: jump 2s infinite;
  animation-direction: alternate;
  transition: ease-in-out;
  font-weight: bold;
  box-shadow: 3px 5px 15px -6px #000000;
}

@keyframes jump {
  100% {
    transform: scale(1.08);
  }
}

.click-here:hover {
  color: white;
  cursor: pointer;
  background-color: #92ad1a;
}

.card {
  text-align: center;
  position: absolute;
  background-color: #dadedf;
  margin-top: -28.5rem;
  margin-left: 27%;
  z-index: 30;
  border-radius: 1rem;
  box-shadow: 3px 5px 15px -6px #000000;
  transition: ease-in-out;
  animation: openCard 1s;
}

@keyframes openCard {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.card-content {
  padding: 3rem;
}

.gif {
  width: 7rem;
  height: 7rem;
}

.close {
  padding: 1rem;
  background: none;
  border: 2px solid #92ad1a;
  border-radius: 1rem;
}

.close:hover {
  background-color: #92ad1a;
  box-shadow: 3px 5px 15px -6px #000000;
  cursor: pointer;
  color: white;
}

.thanks-text {
  padding: 0.5rem;
  background-color: #c5db5f;
}
</style>