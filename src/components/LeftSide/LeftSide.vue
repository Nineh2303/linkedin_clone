<script setup>
import {useStore} from "@/store/index.js";

const store= useStore()
const {user} = store;
</script>
<template>
  <div class="container">
    <div class="art-card">
      <div class="user-info">
        <div class="background"/>
        <router-link to="/">
          <div class="photo"/>
          <div class="link">Welcome, {{ user.displayName }} !</div>
        </router-link>
        <router-link to="/">
          <div class="add-photo-text">
            Add a photo
          </div>
        </router-link>
      </div>
      <div class="widget">
        <router-link to="/">
          <div>
            <span>Connections</span>
            <span>Grow your network</span>
          </div>
          <img src="@/assets/images/widget-icon.svg" alt=""/>
        </router-link>
      </div>
      <div class="item">
        <img src="@/assets/images/item-icon.svg" alt=""/>
        My Items
      </div>
    </div>
    <div class="community-card">
      <router-link to="/">
        <span>Groups</span>
      </router-link>
      <router-link to="/">
        <span>
          Events
          <img src="@/assets/images/plus-icon.svg" alt=""/>
        </span>
      </router-link>
      <router-link to="/">
        <span>Follow hashtags</span>
      </router-link>
      <router-link to="/">Discover more</router-link>
    </div>
  </div>
</template>

<style scoped>
@import "style.css";
</style>