<!-- <template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template> -->


<template>
  <div id="app">
      <img src="./assets/logo.png" alt="">
      <HelloWorld />
      <p>{{ formattedDate }}</p>
      <button @click="incrementDay">Incrémenter</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import {mapGetters, mapActions} from "vuex"

export default {
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters(["formattedDate"])
  },
  methods: {
      ...mapActions(['incrementMonth'])
    }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>