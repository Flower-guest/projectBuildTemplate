<template>
  <div>
    <div class="absolute top-0 left-0 w-full z-1 h-70 bg-dark center-between px-15 box-border">
      <div class="center mt-8">
        <img class="w-50 h-50 mr-20" :src="getAssets('home.png')" alt="logo" />
        <div class="flex flex-col items-center fc-white lh-30">
          <span class="fs-30">ss</span>
          <span class="fs-12">platform</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssets } from '@/utils';
</script>

<style scoped>
.active-line::after {
  content: '';
  @apply bg-info w-100% h-4 absolute md:bottom--10 lg:bottom--12 xl:bottom--16 left-0 rounded-18;
}
</style>
