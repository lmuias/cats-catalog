<script setup lang="ts">
  import { ref, onMounted, inject, Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = inject<Ref<string | null>>('username') || ref<string | null>(null);
const visibleLog = ref(false);

onMounted(() => {
  const storedName = localStorage.getItem('username');
    if (storedName) {
      username.value = storedName;
    }
})

const logOut = () => {
  localStorage.setItem('username', '');
  username.value = null;
  visibleLog.value = false;
  router.push({name: 'home'})
};
</script>

<template>
  <nav class="w-full bg-[#EBECFF]">
    <ul class="flex justify-between items-center gap-5 py-3 px-5 lg:px-[72px] relative">
      <li>
        <RouterLink to="/" class="block h-auto transition-transform hover:scale-95">
          <img src="@/assets/logo.png" alt="Logo" />
        </RouterLink>
      </li>
      <li v-if="username" class="avatar" @click="visibleLog = !visibleLog">
        {{ username[0] }}
      </li>
      <button
        v-if="visibleLog"
        type="button"
        @click="logOut"
        class="absolute border-2 text-[#434343] cursor-pointer border-white shadow-md bg-[#EBECFF] py-3 px-4 rounded-lg w-[160px] -bottom-[60px] right-20 transition-colors hover:text-[#6E72EC] hover:bg-[#D6D8FF]"
        >
        <p class="text-lg">Log out</p>
      </button>
    </ul>
  </nav>
</template>

<style scoped>
  .avatar {
    @apply w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-3xl text-white cursor-pointer transition-transform hover:scale-95;
  }
</style>
