<template>
  <div class="hello">
    <div class="header">
      <a class="logo"></a>
      <input
        v:mode="pok"
        type="text"
        class="search-bar"
        placeholder="Enter name Pokemon"
      />
      <a href="" class="search-icon"><i class="ti-search"></i></a>
    </div>
    <div id="list-items">
      <router-link
        class="item"
        v-for="pokemon in pokemons"
        :to="/pokemon/ + pokemon.id"
        :key="pokemon.name"
        :pokemonDetail="pokemons.id"
        v-wow="{ 'animation-name': 'bounceIn', 'animation-duration': '1s' }"
      >
        <img :src="pokemon.img" alt="" class="img-item" />
        <p class="pokemon-name">{{ pokemon.name }}</p>
        <!-- <p v-for="ty in pokemon.type" :key="ty" class="pokemon-type">
          {{ ty }}
        </p> -->
        <PokemonType :types="pokemon.type" />
      </router-link>
    </div>
    <div class="footer">&copy;Pokemon.com All copyright</div>
  </div>
</template>

<script>
import axios from "axios";
import PokemonType from "@/views/Home/PokemonType.vue";

export default {
  name: "HelloWorld",
  components: {
    PokemonType,
  },
  props: {
    msg: String,
    // eslint-disable-next-line prettier/prettier
  },
  data() {
    return {
      // eslint-disable-next-line prettier/prettier
      pokemons: []
    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      )
      .then((res) => {
        this.pokemons = res.data.pokemon;
      });
  },
  // eslint-disable-next-line prettier/prettier
  // methods: {
  //   routeToPokemonDetail(value) {
  //     this.$router.push({
  //       name: "pokemon",
  //       params: {
  //         id: value.id,
  //       },
  //       props: {
  //         pokemonDetail: {
  //           name: value.name,
  //         },
  //       },
  //     });
  //   },
  // },
  // provide() {
  //   return {
  //     pokemons: this.pokemons,
  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
