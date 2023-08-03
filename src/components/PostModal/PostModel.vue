<script setup>
import {useStore} from "@/store/index.js";
import {ref} from "vue";

const store = useStore()
const {user} =  store
const textData= ref("")
const props = defineProps({
  handleClick :Function
})
console.log(props)
</script>

<template>
<div class="container">
  <div class="content">
    <div class="header">
      <div class="user-info">
        <img :src="user.photoURL" alt="">
        <div>
          <h1>{{user.displayName}}</h1>
          <span>Post to Anyone</span>
        </div>
      </div>
      <button @click="handleClick">
        <img src="@/assets/images/close-icon.svg" alt="">
      </button>
    </div>
    <div class="shared-content">
     <textarea
         placeholder="What do you want to talk about ?"
         autoFocus={true}
         v-model="textData"
     />
    </div>
    <div class="share-creation">
      <div class="attach-asset">
        <div class="asset-button">
          <img src="@/assets/images/post-icon/share-img.svg" alt="">
        </div>
        <div class="asset-button">
          <img src="@/assets/images/post-icon/share-video.svg" alt="">
        </div>
        <div class="asset-button">
          <img src="@/assets/images/post-icon/share-associate.svg" alt="">
        </div>
        <div class="asset-button">
          <img src="@/assets/images/post-icon/share-calendar.svg" alt="">
        </div>
      </div>
      <div class="share-box">
        <button class="share-button" :class="textData!=='' ? null : 'inactive'">Post</button>
      </div>
    </div>

  </div>

</div>
</template>

<style scoped>
@import "style.css";
</style>