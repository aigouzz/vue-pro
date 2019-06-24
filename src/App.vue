<template>
  <div id="app">
    <img src="@/assets/logo.png" alt="">
    <hello></hello>
    <div id="nav">
      <router-link to="/index">Home</router-link> |
      <router-link to="/past">past</router-link> |
      <router-link to="/load">load</router-link> |
      <router-link to="/next">next</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import hello from './components/HelloWorld';
  export default {
    data() {
      return {

      };
    },
    components: {
      hello,
    },
  };
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
