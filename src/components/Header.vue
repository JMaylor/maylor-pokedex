<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand to="/">maylor.io</b-navbar-brand>

			<b-navbar-nav>
				<b-form-input
					size="sm"
					class="mr-sm-2 search-bar"
					placeholder="Search"
					:value="query"
					@keypress.enter="searchPokemon"
				></b-form-input>
				<b-button v-if="viewType === 'single'" size="sm" @click="changeToListView">Results</b-button>
			</b-navbar-nav>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/About">About</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: "Header",
		computed: {
			...mapState({
				query: state => state.query,
			}),
			viewType() {
				return this.$store.state.view;
			}
		},
		methods: {
			updateQuery (e) {
				this.$store.commit('setQuery', e.target.value);
			},
			searchPokemon(e) {
				this.updateQuery(e);
				this.$store.commit("filterByType", this.query);
				this.$store.commit("setView", "list");
			},
			changeToListView() {
				this.$store.commit("setView", "list");
			}
		},
		created() {
			this.$store.dispatch("searchPokemon");
			this.$store.commit("setFilteredPokemon", '');
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>