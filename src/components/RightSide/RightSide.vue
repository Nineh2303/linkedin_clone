<script setup>

</script>
<template>
    <div class="container">
      <div class="follow-card">
        <div class="title">
          <h2>Add to your feed</h2>
          <img src="@/assets/images/feed-icon.svg" alt=""/>
        </div>
        <ul class="feed-list">
          <li>
            <router-link to="/">
              <div class="avatar"/>
            </router-link>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <router-link to="/">
              <div class="avatar"/>
            </router-link>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </ul>
        <router-link to="/" class="recommendation">
          View all recommendations
          <img src="@/assets/images/right-icon.svg" alt=""/>
        </router-link>
      </div>
      <div class="banner-card">
        <img
            src="@/assets/images/job_finding.jpg"
            alt=""
        />
      </div>
    </div>

</template>

<style scoped>
    @import "style.css";
</style>