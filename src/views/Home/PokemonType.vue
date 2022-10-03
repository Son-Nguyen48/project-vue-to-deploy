<template>
  <div class="pokemon-list-type">
    <p
      v-for="poke in types"
      :class="[typeColor(poke)]"
      :key="poke"
      class="pokemon-type"
    >
      <span> {{ poke }}</span>
    </p>
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
  // eslint-disable-next-line prettier/prettier
  Ice: "iceType"
};

export default {
  name: "PokemonType",
  props: {
    // eslint-disable-next-line prettier/prettier
    types: Array
  },
  methods: {
    typeColor(type) {
      return objectColor[type];
      // eslint-disable-next-line prettier/prettier
    }
    // eslint-disable-next-line prettier/prettier
  }
};
</script>
