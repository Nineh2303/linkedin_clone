<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
</script>

<template>
    <div class="container">
      <div class="content">
        <span class="logo">
          <router-link to="/">
            <img src="@/assets/images/home-logo.svg" alt="">
          </router-link>
        </span>
        <div class="search">
          <div>
            <input type="text" placeholder="Search">
          </div>
          <div class="search-icon">
            <img src="@/assets/images/search-icon.svg" alt="">
          </div>
        </div>
        <Navbar/>
      </div>
    </div>
</template>

<style scoped>
@import "style.css";
</style>