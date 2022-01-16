import Vue from 'vue';
import VueRouter from "vue-router";
import Favorites from "@/views/Favorites";
import VideoListing from "@/views/VideoListing";
import Watch from "@/views/Watch";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: VideoListing},
        {path: "/favorites/:userid", component: Favorites},
        {path: "/watch/:videoId", component: Watch},

    ]
});

export default router;
