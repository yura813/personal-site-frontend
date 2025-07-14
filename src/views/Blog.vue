<script setup>
import ArticleCard from "@/components/ArticleCard.vue";
</script>
<template>
  <div class="relative top-40 px-40">
    <div
      class="flex justify-between items-end gap-6 py-2 px-2 border-b-1 border-gray-300"
    >
      <div>分類一</div>
      <div>分類二</div>
      <div>分類三</div>
      <div>分類四</div>
      <div>分類五</div>
      <div>
        <input
          type="text"
          placeholder="搜尋"
          class="px-2 py-1 outline rounded outline-gray-300"
        />
      </div>
    </div>
    <div class="flex flex-col gap-6 py-12">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </div>
</template>
