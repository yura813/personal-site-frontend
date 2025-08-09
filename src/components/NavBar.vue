<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <nav
    class="flex justify-between items-center absolute w-full px-20 h-20 bg-primary"
  >
    <div
      class="font-sans text-2xl font-bold text-white-soft cursor-pointer"
      @click="router.push('/')"
    >
      Yura
    </div>
    <div class="flex items-center h-20 bg-white-soft">
      <div class="flex justify-between items-center">
        <div
          class="cursor-pointer h-20 px-6 flex items-center hover:bg-primary hover:text-white-soft transition-all duration-300"
        >
          Portfolio
        </div>
        <div
          class="cursor-pointer h-20 px-6 flex items-center hover:bg-primary hover:text-white-soft transition-all duration-300"
          @click="router.push('/blog')"
        >
          Blog
        </div>
        <div
          class="cursor-pointer h-20 px-6 flex items-center hover:bg-primary hover:text-white-soft transition-all duration-300"
          @click="router.push('/about')"
        >
          About
        </div>
      </div>
    </div>
  </nav>
</template>
