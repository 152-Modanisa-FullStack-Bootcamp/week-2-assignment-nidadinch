<template>
  <div class='header-container'>
    <button class="align-right" @click="navigateToFavoritesPage"> Favorites : {{getFavoriteCount}}</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Header',
  methods:{
    navigateToFavoritesPage(){
      this.$router.push('/favorites/bootcamp')
    }
  },
  computed:{
    ...mapGetters(['getFavoriteCount'])
  },
}
</script>
<style scoped>
.header-container {
  flex-wrap: wrap;
  display: flex;
  align-items: flex-end;
  background-color: #42b983;
  width: 100%;
  justify-content: space-between;
  padding: 30px 20px;
  margin-bottom: 40px;
}
.header-container > .align-right{
  margin-left: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
