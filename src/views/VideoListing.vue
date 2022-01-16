<template>
  <div id="video-list">
    <Video
        v-for="video in videos"
        :key="video.id"
        :video="video"
    ></Video>
  </div>
</template>

<script>
import Video from "@/components/Video";
import axios from "axios";

export default {
  name: "VideoListing",
  components: {Video},
  data(){
    return{
      videos:[],
    }
  },
  async mounted() {
    const { data } = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
    this.videos = data
    console.log(data);
  },
  methods:{

  }
}
</script>

<style scoped>
#video-list{
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  margin:auto;
  flex-direction: row;
}
</style>
