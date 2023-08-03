<script setup>
import Header from "@/components/Header/Header.vue";
import MainLayout from "../../layouts/MainLayout/MainLayout.vue";
import {onBeforeMount, onMounted, watch} from "vue";
import {useStore} from "@/store/index.js";
import {storeToRefs} from "pinia";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore() ;
const {user} =  storeToRefs(store)


watch(user, () => {
  if (user.value == null) {
    router.push("/")
  }
})
</script>

<template>
  <Header/>
  <div class="main-container">
    <div class="section">
      <h5>
        <router-link to="/">Hiring in a hurry ? -</router-link>
      </h5>
      <p>
        Find talented pros in record time with Upwork and keep business moving
      </p>
    </div>
    <MainLayout/>
  </div>
</template>

<style scoped>
@import url(style.css);
</style>