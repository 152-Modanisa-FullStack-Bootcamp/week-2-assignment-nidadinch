<template>
  <div class="video-container">
    <div class="video-image">
        <img
            @click="videoClicked"
            class="video-cover-image"
            :src="videoImage"
            :alt="video.title"
            @mouseover="videoImage = video.hoverImage"
            @mouseleave="videoImage = video.coverImage"
        />
      <button
          class="favorite-button"
          :class="{'favorite': isFavorite}"
          @mouseover="videoImage = video.hoverImage"
          @click="favoriteClicked"
      >
        {{favoriteButtonText}}
        <img class="favorite-icon" :src="getImage" alt="">
      </button>
    </div>
    <div class="video-description">
      <div class="video-owner-image-container">
        <img class="video-owner-image" :src="video.ownerImage" >
        <h3 @click="videoClicked"> {{video.title}} </h3>
      </div>
      <div class="video-information">
        <p> {{video.ownerName}} </p>
        <p class="video-subdescription"> {{video.viewCount}} Views • {{video.publishDateInMonth}} months ago</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    video:Object
  },
  data(){
    return{
      isFavorite: false,
      videoImage: this.video.coverImage,
      videoId: this.video.id,
    }
  },
  computed:{
    getImage(){
      return require(this.isFavorite ? '../assets/favorite-icon-grey.png': '../assets/favorite-icon-red.png');
    },
    favoriteButtonText(){
      return this.isFavorite ? 'Remove from Favorites': 'Add to Favorites';

    }
  },
  methods:{
    favoriteClicked(){
      this.isFavorite = !this.isFavorite;
      this.$store.dispatch("videoStatusChanged", this.video)
    },
    videoClicked(){
      this.$router.push("/watch/" + this.videoId);
    },
  },

 }
</script>

<style scoped>

.video-container{
  width: 360px;
  margin: 0 25px 40px 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
.video-image{
  position: relative;
}
.video-cover-image{
  cursor: pointer;
  display: block;
  width: 360px;
  height: 200px;
}
.video-image > .favorite-button {
  position: absolute;
  top: 0;
  right: 0;
}
.video-owner-image-container{
  align-items: center;
  display: flex;
  flex-direction: row;
}
.video-owner-image{
  width: 36px;
  height: 36px;
  border-radius: 50px;
}

.video-description{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.video-information{
  margin-left: 56px;
}
.favorite-icon{
  width: 12px;
  height: 12px;
}

.video-owner-image-container h3{
  margin-left: 20px;
  font-size:16px;
  cursor: pointer;
}
h3,
p{
  margin:0;
  padding:0;
}

.video-subdescription {
  font-size:14px;
}

</style>
