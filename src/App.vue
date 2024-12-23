<script setup lang="ts">
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import { RouterView } from 'vue-router';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Loader from './components/Loader.vue';
  import { provide } from 'vue';
  import { useUserStore } from './store'; 
  const { username } = useUserStore();

  provide('username', username);

  const isLoading = ref(false);
  const router = useRouter();

  router.beforeEach((to, from, next) => {
    isLoading.value = true;

    setTimeout(() => {
      next();
    }, 500);
  });

  router.afterEach(() => {
    isLoading.value = false;
  });
</script>


<template>
  <Header></Header>

  <main class="max-w-[1024px] my-0 mx-auto px-5 pb-14 xl:max-w-[1330px] pt-14 min-h-[55vh]">
    <RouterView v-if="!isLoading"/>
    <Loader v-else />
  </main>

  <Footer></Footer>
</template>

<style scoped>
</style>
