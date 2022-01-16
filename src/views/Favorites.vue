<template>
  <div class="favorite-container">
    <FavoriteVideo
        v-for="video in favorites"
        :key="video.id"
        :video="video"
    ></FavoriteVideo>
  </div>
</template>

<script>
import FavoriteVideo from "@/components/FavoriteVideo";
import { mapGetters } from 'vuex';
export default {
  name: "Favorites",
  components:{
    FavoriteVideo,
  },
  computed:{
    ...mapGetters({
      favorites: 'getFavoriteVideos'
    })
  },
  methods:{

  },
  mounted() {
    console.log(this.favorites);
  }

}
</script>

<style scoped>
.favorite-container{
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin:auto;
  flex-direction: row;
}
</style>
