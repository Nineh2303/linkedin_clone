<script setup>

import {useStore} from "@/store/index.js";

const store = useStore() ;
const  {user} = store
</script>
<template>
    <div class="container">
        <div class="shared-actor">
          <router-link to="/">
            <img :src="user.photoURL" alt=""/>
            <div>
              <span>{{user.displayName}}</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </router-link>
          <button>
            <img src="@/assets/images/ellipsis.svg" alt=""/>
          </button>
        </div>
      <div class="description">Description</div>
      <div class="shared-img">
        <img src="@/assets/images/shared_image.png" alt=""/>
      </div>
      <div class="social-counts">
        <li>
          <button>
            <img src="@/assets/images/react-icon/like-action.svg" alt=""/>
            <img src="@/assets/images/react-icon/heart-action.svg" alt=""/>
            <span>75</span>
          </button>
        </li>
        <li>
          <router-link to="/">2 comments</router-link>
        </li>
      </div>
      <div class="social-actions">
        <button>
          <img src="@/assets/images/article-action/thumb-up-icon.svg" alt=""/>
          <span>Like</span>
        </button>
        <button>
          <img src="@/assets/images/article-action/cmt-icon.svg" alt=""/>
          <span>Comment</span>
        </button>
        <button>
          <img src="@/assets/images/article-action/repost-medium-icon.svg" alt=""/>
          <span>Repost</span>
        </button>
        <button>
          <img src="@/assets/images/article-action/send-icon.svg" alt=""/>
          <span>Send</span>
        </button>
      </div>
    </div>

</template>

<style scoped>
@import "style.css";
</style>