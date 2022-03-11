<template>
  <div class="home">
    <HelloWorld PokemonName="A" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
