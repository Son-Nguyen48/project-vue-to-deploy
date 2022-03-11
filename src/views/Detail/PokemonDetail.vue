<template>
  <div
    id="pokemon-detail"
    v-wow="{ 'animation-name': 'bounceIn', 'animation-duration': '1s' }"
  >
    <h5 class="pokemon-name">Name: {{ pokemonDetail.name }}</h5>
    <h5 class="pokemon-number">Number: {{ pokemonDetail.num }}</h5>
    <div class="table-infor">
      <div class="pokemon-card">
        <img
          :src="pokemonDetail.img"
          alt=""
          class="pokemon-img"
          v-wow="{ 'animation-name': 'bounceIn', 'animation-duration': '1s' }"
        />
      </div>
      <div class="box-detail-1">
        <table class="pokemon-data">
          <tbody>
            <tr>
              <th class="pokemon-height left">Height:</th>
              <td>{{ pokemonDetail.height }}</td>
            </tr>
            <tr>
              <th class="pokemon-weight left">Weight:</th>
              <td>{{ pokemonDetail.weight }}</td>
            </tr>
            <tr>
              <th class="pokemon-candy left">Candy:</th>
              <td>{{ pokemonDetail.candy }}</td>
            </tr>
            <tr>
              <th class="pokemon-egg left">Egg:</th>
              <td>{{ pokemonDetail.egg }}</td>
            </tr>
            <tr>
              <th class="pokemon-candy_count left">Candy count:</th>
              <td>{{ pokemonDetail.candy_count }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="box-detail-2">
        <table>
          <tbody>
            <tr>
              <td>Type:</td>
              <td
                :class="[typeColor(type)]"
                class="pokemon-type"
                v-for="type in pokemonDetail.type"
                :key="type"
              >
                {{ type }}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Weaknesses:</td>
              <td
                :class="[typeColor(type)]"
                class="pokemon-type"
                v-for="type in pokemonDetail.weaknesses"
                :key="type"
              >
                {{ type }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      Pokemon Go:
      <table>
        <tbody>
          <tr>
            <th class="pokemon-egg">egg</th>
            <td>{{ pokemonDetail.egg }}</td>
          </tr>
          <tr>
            <th class="pokemon-spawn_chance">spawn_chance</th>
            <td>{{ pokemonDetail.spawn_chance }}</td>
          </tr>
          <tr>
            <th class="pokemon-avg_spawns">avg_spawns</th>
            <td>{{ pokemonDetail.avg_spawns }}</td>
          </tr>
          <tr>
            <th class="pokemon-spawn_time">spawn_time</th>
            <td>{{ pokemonDetail.spawn_time }}</td>
          </tr>
          <tr>
            <th class="pokemon-multipliers">multipliers</th>
            <td>{{ pokemonDetail.multipliers }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pokemon-Weaknesses">Evolution:</div>
    <div class="pokemon-evolutions"></div>
    <div class="footer">&copy;Pokemon.com All copyright</div>
  </div>
</template>

<script>
const objectColor = {
  Grass: "grassType",
  Poison: "poisonType",
  Fire: "fireType",
  Water: "waterType",
  Bug: "bugType",
  Flying: "flyingType",
  Ground: "groundType",
  Psychic: "psychicType",
  Electric: "electricType",
  Normal: "normalType",
  Dragon: "dragonType",
  Fighting: "fightingType",
  Rock: "rockType",
  Ice: "iceType",
  Dark: "darkType",
  Ghost: "ghostType",
};
import axios from "axios";
export default {
  name: "PokemonDetail",
  data() {
    return {
      pokemonDetail: {},
    };
  },
  created() {
    // const pokemonId = this.$route.params.id;
    // // eslint-disable-next-line prettier/prettier
    // const selectedPokemon = this.pokemons.find(pokemon => pokemon.id === pokemonId);
    // this.pokemon = selectedPokemon;
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      )
      .then((res) => {
        const id = this.$route.params.id;
        const pokemon = res.data.pokemon.find((p) => p.id === Number(id));
        this.pokemonDetail = pokemon;
      });
  },
  methods: {
    typeColor(type) {
      return objectColor[type];
    },
  },
};
</script>

<style lang="css" scope>
.left {
  float: left;
}

.right {
  float: right;
}

body {
  background: rgb(220, 229, 235);
  font-size: 12px;
}

#pokemon-detail {
  margin: 20px auto;
  width: 600px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#pokemon-detail .table-infor {
  display: flex;
}

#pokemon-detail .pokemon-img {
  height: 147px;
  margin: 0px auto;
  background: linear-gradient(180deg, #53a4cf 6%, #f16e57 100%);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.box-detail-1,
.box-detail-2 {
  width: calc(100% / 3);
  margin-left: 16px;
}

.box-detail-1 .pokemon-data tr,
.box-detail-2 tr {
  border-bottom: 0.01px solid rgb(230, 228, 228);
}

.box-detail-2 {
  margin-left: 18px;
}

.box-detail-2 .pokemon-type {
  font-family: "Flexo-Medium", arial, sans-serif;
  border-radius: 3px;
  line-height: 16px;
  /* max-width: 110px; */
  width: max-content;
  margin: 0 1.5625% 4px 0px;
  width: 46.4375%;
  /* float: left; */
  text-transform: none;
  font-size: 12px;
  text-align: center;
}
</style>
