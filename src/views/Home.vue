<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
</script>

<template>
  <div
    class="relative flex items-center top-20 px-40 h-120 font-sans text-2xl font-bold bg-primary"
  >
    <div class="flex flex-col gap-8 text-white-soft">
      <p>Hi, I'm Yura</p>
      <p>Front-end Developer</p>
    </div>
  </div>
  <div class="relative top-20">
    <div class="flex gap-12 px-40 py-12">
      <section class="w-3/4 min-w-xs flex flex-col gap-6 relative">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </section>
      <aside class="flex flex-col gap-6">
        <div
          class="flex flex-col gap-4 bg-purple-100 h-64 px-6 py-10 text-center rounded-md shadow-md"
        >
          <div><img src="" alt="" /></div>
          <p class="font-bold text-xl">Yura Peng</p>
          <a href="https://github.com/yura813">GitHub</a>
          <p>Email: <span>cyp.yura@gmail.com</span></p>
        </div>
        <div
          class="flex flex-col gap-4 bg-purple-100 px-6 py-8 rounded-md shadow-md"
        >
          <p class="font-bold">文章分類</p>
          <ul class="flex flex-col gap-2">
            <li>前端</li>
            <li>後端</li>
            <li>工具</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>
