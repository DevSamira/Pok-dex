<template>
  <div class="body">
    <div class="search">
      <div class="search-content">
        <input type="text" placeholder="Escreva aqui" v-model="search" />
        <button @click="searchResult()" type="submit">Encontre</button>
        <button @click="clearSpace(search)" type="submit">x</button>
      </div>
    </div>
    <result-component
      :pokeName="pokeName"
      :pokeAbilities="pokeAbilities"
      :pokeType="pokeType"
      :pokeOrder="pokeOrder"
      :pokeImage="pokeImage"
      :showCard="showCard"
    />
  </div>
</template>

<script>
import ResultComponent from "../components/ResultComponent.vue";

export default {
  name: "SearchComponent",
  components: {
    ResultComponent,
  },
  data() {
    return {
      search: "",
      url: "https://pokeapi.co/api/v2/pokemon/",
      lowerCaseSearch: null,
      pokemon: "",
      pokeName: null,
      pokeType: null,
      pokeOrder: null,
      pokeImage: null,
      catchAbility: null,
      filteredAbilities: null,
      pokeAbilities: null,
      showCard: false,
    };
  },
  methods: {
    searchResult() {
      this.showCard = !this.showCard;

      this.lowerCaseSearch = this.search.toLowerCase();
      this.url = this.url + this.lowerCaseSearch;

      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          this.pokemon = data;

          this.pokeName = this.pokemon.name.toUpperCase();
          this.catchAbility = this.pokemon.moves.map(
            (item) => "" + item.move.name
          );
          this.pokeOrder = this.pokemon.order;
          this.pokeType = this.pokemon.types
            .map((item) => "" + item.type.name)
            .toString();
          this.pokeImage = this.pokemon.sprites.front_default;
          this.filteredAbilities = this.catchAbility.slice(0, 4);
          this.pokeAbilities = this.filteredAbilities.toString();
        })
        .catch((err) => console.log(err));
      this.url = "https://pokeapi.co/api/v2/pokemon/";
    },
    clearSpace() {
      this.showCard = !this.showCard;
      this.search = "";
      this.lowerCaseSearch = "";
    },
  },
};
</script>

<style scoped>
.body {
  padding-bottom: 10rem;
}

.search {
  padding: 5rem 2rem;
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.search-content {
  border-radius: 0.5rem;
  background-color: white;
  padding: 0rem 0rem;
  align-items: center;
}

input {
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  width: 25rem;
}

button {
  margin-left: 1rem;
  padding: 0.9rem;
  border: none;
  color: #fff;
  transition: 0.5s ease-in-out;
}

button:nth-child(2) {
  background-color: #aec253;
}

button:nth-child(3) {
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  margin-left: 0rem;
  background-color: #b22222;
}

button:hover {
  cursor: pointer;
  background-color: #606060;
}

@media only screen and (max-width: 568px) {
  .search-content {
    height: 2rem;
  }

  input {
    height: 2.5rem;
  }

  button {
    margin-top: 3rem;
    padding: 1rem 4rem;
    margin-left: 10%;
  }

  button:nth-child(2) {
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }
}
</style>
