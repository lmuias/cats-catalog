<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import { Cat } from '@/types/CatType';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  cat?: Cat;
}>();

</script>

<template>
  <section v-if="!props.cat" class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-yellow-500 text-7xl mb-5"></i>
    <h1 class="text-6xl font-bold mb-4">OOps, seems you can`t reach this page :(</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <RouterLink
      to="/"
      class="text-white transition-colors bg-[#6E72EC] hover:bg-[#343675] rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </RouterLink
    >
  </section>

  <section v-else class="flex flex-col gap-12">
    <BackButton />
    <div class="list-page">
      <img :src="props.cat.img" alt="Cat Image" class="w-full grid-item">
      <p class="grid-item text-lg md:text-2xl">{{ props.cat.fact }}</p>
    </div>
  </section>
</template>

<style scoped>
  .grid-item {
    @apply col-span-2 md:col-start-2 md:col-span-4 lg:col-start-3 lg:col-span-8;
  }
</style>