<script setup>
import Article from "@/components/Article/Article.vue";
import PostModel from "@/components/PostModal/PostModel.vue";
import {ref} from "vue";
import {useStore} from "@/store/index.js";
const postModal =  ref(false)
const store= useStore()
const {user} = store;
const handleClick = ()=>{
  postModal.value = !postModal.value
}
</script>
<template>
  <div class="container">
    <div class="share-box">
      <div>
        <img :src="user.photoURL" alt=""/>
        <button @click="handleClick">Start a post</button>
      </div>

      <div>
        <button>
          <img src="@/assets/images/image-icon.svg" alt=""/>
          <span>Photo</span>
        </button>
        <button>
          <img src="@/assets/images/video-icon.svg" alt=""/>
          <span>Video</span>
        </button>
        <button>
          <img src="@/assets/images/event-icon.svg" alt=""/>
          <span>Event</span>
        </button>
        <button>
          <img src="@/assets/images/article-logo.svg" alt=""/>
          <span>Write Article</span>
        </button>

      </div>
    </div>
    <Article/>
    <template v-if="postModal" class="post-modal">
      <PostModel :handleClick ="handleClick"/>
    </template>
  </div>
  <div>
  </div>
</template>

<style  scoped>
    @import "style.css";
</style>