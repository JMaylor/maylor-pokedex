<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
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
