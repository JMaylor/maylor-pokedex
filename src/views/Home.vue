<template>
  <div class="home">
    <PokemonDetail v-if="viewType === 'single'" />
    <Pokemon v-if="viewType === 'list'" />
  </div>
</template>

<script>
import PokemonDetail from "@/components/PokemonDetail.vue";
import Pokemon from "@/components/Pokemon.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    PokemonDetail,
    Pokemon
  },
  computed: {
    viewType() {
      return this.$store.getters.getView;
    }
  }
};
</script>
