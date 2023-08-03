<script setup>
import {useStore} from "@/store/index.js";
import {onMounted} from "vue";
const {getAuth} =useStore() ;

onMounted(()=>{
  getAuth()
})

</script>

<template>
  <router-view>

  </router-view>
</template>

<style scoped>
</style>
