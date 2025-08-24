<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { AlignJustify, ChevronUp } from "lucide-vue-next";
const router = useRouter();
const isMenuOpen = ref(false);
const goTo = (path) => {
  router.push(path);
  isMenuOpen.value = false;
}
const navItems = [
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];
</script>
<template>
  <nav
    class="flex justify-between items-center fixed w-full px-10 h-20 bg-primary"
  >
    <div
      class="text-2xl font-bold text-white-soft cursor-pointer"
      @click="router.push('/')"
    >
      Yura
    </div>
    <div class="block md:hidden" @click="isMenuOpen = !isMenuOpen">
      <AlignJustify class="text-white-soft" v-if="!isMenuOpen" />
      <ChevronUp class="text-white-soft" v-if="isMenuOpen" />
    </div>
    <div class="hidden md:flex items-center h-20 bg-white-soft">
      <div class="flex justify-between items-center">
        <div
          class="cursor-pointer h-20 px-6 flex items-center hover:bg-primary hover:text-white-soft transition-all duration-300"
        >
          Portfolio
        </div>
        <div
          class="cursor-pointer h-20 px-6 flex items-center hover:bg-primary hover:text-white-soft transition-all duration-300"
          @click="goTo('/blog')"
        >
          Blog
        </div>
        <div
          class="cursor-pointer h-20 px-6 flex items-center hover:bg-primary hover:text-white-soft transition-all duration-300"
          @click="goTo('/about')"
        >
          About
        </div>
      </div>
    </div>
  </nav>
  <div
    class="h-screen w-full fixed top-20 bottom-0 right-0 bg-white-soft md:hidden py-10"
    v-if="isMenuOpen"
  >
    <div
      class="flex flex-col gap-10 px-10 text-xl text-primary underline-offset-6 underline"
    >
      <p
        v-for="item in navItems"
        :key="item.name"
        @click="goTo(item.path)"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
