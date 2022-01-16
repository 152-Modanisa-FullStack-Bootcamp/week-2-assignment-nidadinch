<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  height: 100%;
  width: 100%;
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container > * {
  padding: 20px;
}
</style>
