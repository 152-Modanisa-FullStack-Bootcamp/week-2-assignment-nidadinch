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
    </div>
    <div class="video-description">
      <div class="video-information">
        <h3 @click="videoClicked"> {{video.title}} </h3>
        <p class="video-subdescription">
          {{video.viewCount}} Views • {{video.publishDateInMonth}} months ago
        </p>
        <div class="video-owner-image-container">
          <img class="video-owner-image" :src="video.ownerImage" >
          <p> {{video.ownerName}} </p>
        </div>
        <p> {{video.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteVideo",
  props: {
    video:Object
  },
  data(){
    return{
      videoImage: this.video.coverImage,
      videoId: this.video.id,
    }
  },
  methods:{
    videoClicked(){
      this.$router.push("/watch/" + this.videoId);
    }
  },
}
</script>

<style scoped>

.video-container{
  width: auto;
  margin: 0 25px 40px 25px;
  display: flex;
  flex-direction: row;
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
.video-owner-image{
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin-right: 10px;
}
.video-owner-image-container{
  display: flex;
  flex-direction: row;
}
.video-description{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.video-information{
  margin-left: 56px;
}
.video-information h3{
  cursor: pointer;
}

h3,
p{
  margin:0;
  padding:5px 0;
}

.video-subdescription {
  font-size:14px;
}

</style>
