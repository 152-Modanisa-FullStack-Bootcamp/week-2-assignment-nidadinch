import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        favoriteVideos:[]
    },
    getters: {
        getFavoriteCount: state => {
            return state.favoriteVideos.length
        },
        getFavoriteVideos: state => {
            return state.favoriteVideos;
        },
        isFavorite:(state) => (videoId) =>{
            return state.favoriteVideos.some(video => video.id === videoId)
        },
    },
    mutations:{
        addToFavorites(state, video){
            state.favoriteVideos.push(video);
        },
        deleteFromFavoritesById(state, videoId){
            state.favoriteVideos = state.favoriteVideos.filter(video => video.id !== videoId)
        }
    },
    actions:{
        videoStatusChanged({commit, getters}, video){
            getters.isFavorite(video.id) ? commit('deleteFromFavoritesById', video.id) : commit('addToFavorites', video);
        }
    }
});


