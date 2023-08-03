<script setup>
import LeftSide from "@/components/LeftSide/LeftSide.vue";
import Main from "@/components/Main/Main.vue";
import RightSide from "@/components/RightSide/RightSide.vue";
</script>
<template>
  <div class="layout">
    <LeftSide/>
    <Main/>
    <RightSide/>
  </div>
</template>

<style lang="css" scoped>
@import url(style.css);
</style>