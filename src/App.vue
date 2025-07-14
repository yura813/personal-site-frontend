<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="relative flex flex-col">
    <div class="sticky top-0 z-50">
      <NavBar />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>
