<script setup>
import { ref } from "vue";
import ArticleCard from "@/components/ArticleCard.vue";
import { Heart } from "lucide-vue-next";
const liked = ref(false);
</script>

<template>
  <!-- <div class="relative top-20 px-50 py-20">
    <h1 class="text-3xl px-2 py-2">文章標題</h1>
    <div class="w-full border-b-1 border-gray-300"></div>
    <div class="flex justify-between px-2 py-2 text-sm">
      <div>
        <div class="flex items-end gap-2">
          <button class="cursor-pointer" @click="liked = !liked">
            <Heart :fill="liked ? '#F77E7E' : 'none'" color="#F77E7E" />
          </button>
          <p>12</p>
        </div>
      </div>
      <div>
        <p>Last Updated：<span>2022-01-01</span></p>
      </div>
    </div>

    <div class="px-12 mt-12 mb-12">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        expedita similique sed adipisci dicta, delectus commodi voluptatem
        consequuntur officiis, velit, sequi atque ipsam vitae perspiciatis
        dolores deserunt aperiam optio ratione aspernatur. Animi incidunt, quis,
        dolorem vero aspernatur maiores adipisci ex rem quidem explicabo
        accusantium excepturi sunt eos obcaecati saepe voluptates repudiandae
        exercitationem beatae blanditiis laboriosam minima laudantium harum!
        Odit natus nisi consequatur. Magnam numquam, ab id fugiat impedit
        blanditiis minima adipisci accusamus autem perferendis. Repellendus iure
        officiis veritatis, consectetur recusandae sequi reprehenderit dolorum
        placeat dicta possimus expedita dolor quae, laborum fugit quis doloribus
        tempora facere error dolore iusto nostrum. Atque, voluptas ipsum harum
        recusandae voluptatum mollitia ut, praesentium magni suscipit libero
        aliquid vitae fugiat facilis rem inventore quos perferendis aliquam
        doloribus necessitatibus aspernatur cumque. Libero nam eveniet fugiat
        neque soluta laudantium, ipsum inventore nisi cumque? Harum vel odio
        voluptatem! Ipsum facere pariatur quas hic deserunt quibusdam vel harum
        sunt! Repellat animi in provident delectus explicabo reiciendis eaque
        quis adipisci iure asperiores dolor, debitis doloremque. Quos vel dolor
        molestias officia eum. Voluptatem aut quos dolor veritatis excepturi
        eligendi dignissimos consequatur doloremque libero possimus, sunt iusto
        quo quam corporis, distinctio, aspernatur nisi! Eveniet, recusandae
        temporibus. Doloribus eum sapiente aliquam totam suscipit voluptates
        commodi, vel animi excepturi iste quia assumenda eos, perspiciatis
        tenetur odio, sunt quis! Molestias omnis voluptatem illum aliquam quasi
        molestiae vel dignissimos officia, at, culpa, numquam repellat quibusdam
        harum sed eaque doloribus. Sapiente asperiores hic aliquid cupiditate
        ipsa odio ullam facere exercitationem quia excepturi voluptates, alias
        magni iure vitae tenetur assumenda doloremque repellendus quasi, animi
        culpa vero odit dolore mollitia nobis. Quidem eligendi quaerat
        repellendus at impedit sit asperiores temporibus? Debitis nulla at
        corporis similique tempora, nihil voluptate culpa excepturi nesciunt
        nostrum! Quasi, totam placeat! Culpa, dolores? Rerum officia nesciunt
        fugit. Molestiae necessitatibus temporibus nisi sint similique. Omnis
        cumque, aperiam quod, nisi tempora corrupti libero, distinctio placeat
        blanditiis ipsa ad! Dignissimos saepe veritatis, similique perferendis
        neque aspernatur fugit placeat, fuga eveniet iusto magnam quisquam,
        porro nemo. Vitae aliquid nesciunt nostrum repellat laborum?
        Exercitationem libero pariatur corporis ducimus, culpa eum alias magnam
        ipsum reiciendis amet eaque recusandae, autem eos neque! Fuga earum
        dolor ut quo nulla distinctio vel harum iste unde assumenda eveniet aut,
        ex, enim perspiciatis beatae tempore explicabo et tenetur optio natus.
        Unde eaque quo quos, quam libero deserunt architecto blanditiis, hic
        cupiditate officia ipsa fugiat temporibus. Molestias sequi ut sint velit
        aliquam quis in eligendi illum nihil facere accusamus veniam maxime
        doloremque error, fugiat rerum. Eveniet possimus rerum facilis accusamus
        est laborum optio quisquam maiores quos laudantium doloribus
        reprehenderit debitis ea sequi, incidunt dignissimos assumenda numquam
        illum quidem repellat fugiat eos voluptatum! Minima voluptatem est alias
        quas assumenda quia velit, eum similique, deleniti, quibusdam earum aut
        officiis dolore praesentium dolorem eligendi quis! Vitae, nihil
        similique necessitatibus, neque nam et dignissimos officiis id, sapiente
        nisi laudantium! Eius alias aliquid error obcaecati dicta repellendus.
        Maiores exceptulanditiis sed! Doloribusdeserunt dignissimos odit ut at
        eveniet necessitatibus cum ipsa qui dolorem fugit laboriosam ullam sequi
        saepe impedit ratione atque illo quo, inventore porro. Illum debitis
        consectetur sint, fugiat quidem modi delectus eaque. Soluta, commodi.
        Iure illo cum, suscipit esse, enim, ut modi dolores est autem aliquid
        quisquam harum dignissimos repellendus veritatis ea. Velit expedita eos
        ex magnam laborum dolores quae, culpa ea sapiente atque, repellat, illo
        non nobis sequi iure. Deleniti recusandae vitae sed explicabo minima
        delectus eius, voluptatibus temporibus excepturi neque expedita aperiam
        in earum, amet consequuntur ipsum enim blanditiis quibusdam fugiat
        eligendi eos velit molestiae mollitia natus! Architecto recusandae quas
        porro ullam consectetur commodi reiciendis vitae tempora! Quidem, qui.
        Laboriosam iste modi illo voluptatum earum inventore magni consectetur
        eveniet labore nostrum accusantium repellendus, voluptas nisi quaerat
        harum quisquam sit recusandae quibusdam adipisci error laudantium.
      </p>
    </div>
    <div class="flex justify-between px-2 py-2 text-sm">
      <div class="flex gap-3">
        <div
          class="px-3 py-1 bg-primary text-white-soft rounded-md hover:bg-hover cursor-pointer"
        >
          咖啡
        </div>
        <div
          class="px-3 py-1 bg-primary text-white-soft rounded-md hover:bg-hover cursor-pointer"
        >
          天氣
        </div>
      </div>
      <div class="flex items-end gap-2">
        <button class="cursor-pointer" @click="liked = !liked">
          <Heart :fill="liked ? '#F77E7E' : 'none'" color="#F77E7E" />
        </button>
        <p>12</p>
      </div>
    </div>
    <div class="w-full border-b-1 border-gray-300"></div>

    <div class="mt-8">
      <h2 class="text-2xl font-bold py-8">See More</h2>
      <div class="px-4 flex flex-col gap-6">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  </div> -->
</template>
