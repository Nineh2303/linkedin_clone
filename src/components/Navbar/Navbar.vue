<script setup>
import {useStore} from "@/store/index.js";



const store=  useStore();
const {user, signOutAPI} =  store


</script>

<template>
  <div class="nav">
    <ul class="nav-wrap">
      <li class="nav-list active">
        <router-link to="/">
          <img src="@/assets/images/nav-home.svg" alt="">
          <span>Home</span>
        </router-link>
      </li>
      <li class="nav-list">
        <router-link to="/">
          <img src="@/assets/images/nav-network.svg" alt="">
          <span>My Networks</span>
        </router-link>
      </li>
      <li class="nav-list">
        <router-link to="/">
          <img src="@/assets/images/nav-jobs.svg" alt="">
          <span>Jobs</span>
        </router-link>
      </li>
      <li class="nav-list">
        <router-link to="/">
          <img src="@/assets/images/nav-messaging.svg" alt="">
          <span>Messaging</span>
        </router-link>
      </li>
      <li class="nav-list">
        <router-link to="/">
          <img src="@/assets/images/nav-notifications.svg" alt="">
          <span>Notifications</span>
        </router-link>
      </li>
      <li class="user">
        <router-link to="/">
          <template v-if="user">
            <img :src="user.photoURL" alt=""/>
          </template>
          <template v-else>
            <img src="@/assets/images/user.svg" alt="">
          </template>
          <div class="li-gr">
            <span>Me</span>
              <img src="@/assets/images/down-icon.svg" alt=""/>
          </div>
        </router-link>
        <div class="sign-out">
          <router-link to="" @click=signOutAPI>Sign Out</router-link>
        </div>
      </li>
      <li class="work">
        <router-link to="/">
          <img src="@/assets/images/nav-work.svg" alt="">
          <div class="li-gr">
            <span>Work</span>
            <img src="@/assets/images/down-icon.svg" alt=""/>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<style scoped>
@import "style.css";
</style>