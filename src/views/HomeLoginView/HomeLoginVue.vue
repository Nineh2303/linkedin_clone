<script setup>
import {useStore} from "@/store/index.js";
import {useRouter, useRoute} from 'vue-router'
import {reactive, ref, watch, watchEffect} from "vue";
import {Pinia} from "@/main.js";
import {storeToRefs} from "pinia";

  const router = useRouter();

  const store = useStore()
  const { signInAPI } = store ;
  const {user} =  storeToRefs(store)

  watch(user,()=>{
    if(user) {
      router.push("/home")
    }
  })


</script>

<template>
  <div class="container">
    <div class="navbar">
      <router-link to="/">
        <img src="@/assets/images/login-logo.svg" alt="">
      </router-link>
      <div>
        <router-link to="/" class="join">Join now</router-link>
        <router-link to="/" class="sign-in">Sign In</router-link>
      </div>
    </div>
    <div class="section">
      <div class="hero">
        <h1>Welcome to your professional community</h1>
        <img src="@/assets/images/login-hero.svg" alt="">
      </div>
      <div class="form">
        <div class="google-login" @click="signInAPI">
          <img src="@/assets/images/google.svg" alt="">
          Sign in with Google
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "style.css";
</style>