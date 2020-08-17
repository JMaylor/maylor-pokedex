<template>
	<b-container fluid>
		<b-row class="justify-content-center">
			<h1
				class="my-3"
			>{{ pokemon.name.replace(pokemon.name.charAt(0), pokemon.name.charAt(0).toUpperCase()) }} <span style="font-size: 24px; font-style: italic; color: #bbb">#{{ pokemon.id }}</span></h1>
		</b-row>
		<b-row>
			<b-col cols="12" md="6" lg="4">
				<b-img fluid :src="`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`" />
			</b-col>
			<b-col cols="12" md="6" lg="4" border-variant="dark">
				<hr />
				<h3>Base Stats</h3>

				<div
					v-for="statistic in pokemon.stats"
					:key="statistic.stat.name"
					class="row mb-1"
					border-variant="dark"
				>
					<div class="col-6" >{{ statistic.stat.name }}:</div>
					<div class="col-6 pt-1">
						<b-progress max="180" show-value :value="statistic.base_stat" :variant="statistic.variant"></b-progress>
					</div>
				</div>
			</b-col>
			<b-col cols="12" md="12" lg="4">
				<hr />
				<h3>Additional Information</h3>Types:
				<div
					class="icon"
					v-for="pokemonType in pokemon.types"
					:key="pokemonType.type.name"
					:class="pokemonType.type.name"
				>
					<img
						:src="`https://duiker101.github.io/pokemon-type-svg-icons/icons/${pokemonType.type.name}.svg`"
					/>
				</div>
				<br />
				Weight: {{ pokemon.weight / 10 }}kg
				<br />
				Height: {{ pokemon.height / 10 }}m
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		name: "PokemonDetail",
		data() {
			return {};
		},
		computed: {
			pokemon() {
				return this.$store.getters.getCurrentPokemon;
			}
		},
		mounted() {
			// this.$store.dispatch("getPokemonDetails", 'charizard');
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.icon {
		display: inline-block;
		border-radius: 100%;
		height: 30px;
		width: 30px;
		margin: auto;
		transition: 200ms all;
	}

	.icon:hover {
		filter: saturate(200%);
		transform: scale(1.1);
		cursor: pointer;
	}

	.icon img {
		height: 60%;
		width: 60%;
		margin: 20%;
	}

	.bug {
		background: #92bc2c;
		box-shadow: 0 0 20px #92bc2c;
	}

	.dark {
		background: #595761;
		box-shadow: 0 0 20px #595761;
	}

	.dragon {
		background: #0c69c8;
		box-shadow: 0 0 20px #0c69c8;
	}

	.electric {
		background: #f2d94e;
		box-shadow: 0 0 20px #f2d94e;
	}

	.fire {
		background: #fba54c;
		box-shadow: 0 0 20px #fba54c;
	}

	.fairy {
		background: #ee90e6;
		box-shadow: 0 0 20px #ee90e6;
	}

	.fighting {
		background: #d3425f;
		box-shadow: 0 0 20px #d3425f;
	}

	.flying {
		background: #a1bbec;
		box-shadow: 0 0 20px #a1bbec;
	}

	.ghost {
		background: #5f6dbc;
		box-shadow: 0 0 20px #5f6dbc;
	}

	.grass {
		background: #5fbd58;
		box-shadow: 0 0 20px #5fbd58;
	}

	.ground {
		background: #da7c4d;
		box-shadow: 0 0 20px #da7c4d;
	}

	.ice {
		background: #75d0c1;
		box-shadow: 0 0 20px #75d0c1;
	}

	.normal {
		background: #a0a29f;
		box-shadow: 0 0 20px #a0a29f;
	}

	.poison {
		background: #b763cf;
		box-shadow: 0 0 20px #b763cf;
	}

	.psychic {
		background: #fa8581;
		box-shadow: 0 0 20px #fa8581;
	}

	.rock {
		background: #c9bb8a;
		box-shadow: 0 0 20px #c9bb8a;
	}

	.steel {
		background: #5695a3;
		box-shadow: 0 0 20px #5695a3;
	}

	.water {
		background: #539ddf;
		box-shadow: 0 0 20px #539ddf;
	}
</style>