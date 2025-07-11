<script setup>
import NavBar from "../components/NavBar.vue";
import ArticleCard from "../components/ArticleCard.vue";
</script>

<template>
  <div class="flex flex-col gap-4">
    <NavBar />
    <div
      class="relative flex items-center top-20 px-40 h-120 font-sans text-2xl font-bold bg-primary"
    >
      <div class="flex flex-col gap-8 text-white-soft">
        <p>Hi, I'm Yura</p>
        <p>Front-end Developer</p>
      </div>
    </div>
    <section class="flex flex-col gap-6 relative top-24 px-40">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </section>
  </div>
</template>
