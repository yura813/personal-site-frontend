<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
</script>

<template>
  <div
    class="w-full h-60 flex items-center pt-28 pb-14 px-14 font-sans text-xl font-bold bg-primary md:h-78 lg:px-32"
  >
    <div class="min-w-xs flex flex-col gap-8 text-white-soft">
      <p>Hi, I'm Yura</p>
      <p>Front-end Developer</p>
    </div>
  </div>
  <div class="flex flex-col px-4 py-12 md:flex-row md:gap-12 md:px-20 lg:px-32">
    <section class="w-full min-w-xs flex flex-col gap-6 pb-6 relative">
      <ArticleCard class="w-full cursor-pointer hover:shadow-lg" />
      <ArticleCard class="cursor-pointer hover:shadow-lg" />
      <ArticleCard class="cursor-pointer hover:shadow-lg" />
    </section>
    <aside class="flex flex-col gap-6 mt-6 md:mt-0 md:w-1/3">
      <div
        class="flex justify-evenly gap-6 bg-purple-100 px-6 py-10 text-center rounded-md shadow-md md:flex-col md:items-center"
      >
        <div class="w-32 md:flex-shrink-0">
          <img
            class="rounded-full"
            src="../assets/myphoto.JPG"
            alt="Yura的照片"
          />
        </div>
        <div class="flex flex-col justify-center gap-2 text-left md:items-center">
          <p class="font-bold text-xl">Yura Peng</p>
          <a href="https://github.com/yura813">GitHub</a>
          <p>cyp.yura@gmail.com</p>
        </div>
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
</template>
