<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { fetchOneCat } from '@/api/catsApi';
import { useRouter } from 'vue-router';
import catImage from '@/assets/catsimg/cat4.png';

const router = useRouter();

const fetchCat = async () => {
  try {
    const cat = await fetchOneCat();
    if (!cat) {
      throw new Error('Failed to fetch cat data');
    }

    const newCat = {
      ...cat,
      img: catImage,
    };

    router.push({
      name: 'fact',
      query: {
        cat: JSON.stringify(newCat),
      },
    });
  } catch (error) {
    console.error('Error in fetchCat:', error);
    alert('Failed to load a new cat fact. Please try again later.');
  }
};
</script>

<template>
  <section class="w-full">
    <div class="w-full h-[520px] bg-[url('@/assets/catsimg/cat4.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-20">
      <div class="flex flex-col gap-5 items-center">
          <h1 class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">Purrfectly Pawsome Cat Facts!</h1>
          <p class="font-bold text-center max-w-[370px] text-white bg-gray-800 p-2 bg-opacity-40 rounded-sm">Unleash your curiosity with delightful tidbits about our feline friends!</p>
      </div>
      <RouterLink
        to="/facts"
        class="block border-2 border-[#6E72EC] text-white bg-[#6E72EC] hover:bg-transparent cursor-pointer w-full max-w-[310px] py-5 text-center font-bold rounded-lg transition-colors"
      >
        View new facts!
      </RouterLink>
      <button
        type="button"
        @click="fetchCat"
        class="block border-2 border-[#6E72EC] text-white bg-[#6E72EC] hover:bg-transparent cursor-pointer w-full max-w-[310px] py-5 text-center font-bold rounded-lg transition-colors"
      >
        View random cat fact!
      </button>
    </div>
</section>
</template>

<style>

</style>