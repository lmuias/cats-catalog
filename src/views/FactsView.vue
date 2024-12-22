<script setup lang="ts">
  import { Cat } from '@/types/CatType';
  import { ref, onMounted, watch } from 'vue';

  import cat1 from '@/assets/catsimg/cat1.png';
  import cat2 from '@/assets/catsimg/cat2.png';
  import cat3 from '@/assets/catsimg/cat3.png';
  import cat4 from '@/assets/catsimg/cat4.png';
  import cat5 from '@/assets/catsimg/cat5.png';
  import cat6 from '@/assets/catsimg/cat6.png';
  import cat7 from '@/assets/catsimg/cat7.png';
  import cat8 from '@/assets/catsimg/cat8.png';
  import cat9 from '@/assets/catsimg/cat9.png';
  
  import CatCard from '@/components/CatCard.vue';
  import FilterDropdown from '@/components/FilterDropdown.vue';
  import SearchForm from '@/components/SearchForm.vue';

  const cats = ref<Cat[]>([]);
  const filteredCats = ref<Cat[]>([]);
  const currentPage = ref(1);
  const selectedOption = ref('All facts');
  const searchQuery = ref('');

  const catImg = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9];

  const fetchCats = async (page = 1) => {
    try {
      const response = await fetch(`https://catfact.ninja/facts?page=${page}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const newCats = data.data.map((cat: Cat, index: number) => ({
        ...cat,
        img: catImg[(cats.value.length + index) % catImg.length],
      }));
      cats.value.push(...newCats);
      filteredCats.value = [...cats.value];
    } catch (error) {
      console.error('Error fetching cat facts:', error);
    }
  };

  const filterCats = () => {
    let result = [...cats.value];

  switch (selectedOption.value) {
      case 'All facts':
        break;
      case 'Show long ones first':
        result.sort((a, b) => b.length - a.length);
        break;
      case 'Show short ones first':
        result.sort((a, b) => a.length - b.length);
        break;
      case 'Short ones only':
        result = result.filter(cat => cat.length < 100);
        break;
      case 'Long ones only':
        result = result.filter(cat => cat.length >= 100);
        break;
    }

    if (searchQuery.value) {
      result = result.filter(cat => cat.fact.toLowerCase().includes(searchQuery.value.toLowerCase()));
    }

    filteredCats.value = result;
  };

  const loadMoreCats = () => {
    currentPage.value++;
    fetchCats(currentPage.value);
    selectedOption.value = 'All facts';
    searchQuery.value = '';
  };

  onMounted(() => fetchCats(currentPage.value));

  watch(selectedOption, filterCats);
  watch(searchQuery, filterCats);
</script>


<template>
  <div class="flex flex-col gap-8 items-center pb-12">
    <h1 class="font-bold text-2xl text-center md:text-3xl lg:text-6xl">Facts About Cats To Share With Kids!</h1>
    <div class="list-page">
      <SearchForm v-model="searchQuery" />
      <FilterDropdown class="dropdown" v-model="selectedOption"  />
    </div>
    <div class="list-page">
      <CatCard 
        v-for="(cat, index) of filteredCats" 
        :key='index' 
        :cat="cat" 
        :catImg="cat.img" 
      />
    </div>
    <button
      v-if="currentPage < 34"
      class="border-2 border-[#6E72EC] rounded-lg text-[#6E72EC] w-full max-w-[310px] py-5 font-semibold transition-colors hover:bg-[#6E72EC] hover:text-white"
      type="button" 
      @click="loadMoreCats"
    >
      Load more facts
    </button>
  </div>
</template>

<style scoped>
  .dropdown {
    @apply md:justify-self-end col-span-2 md:col-span-3 lg:col-span-8
  }
</style>