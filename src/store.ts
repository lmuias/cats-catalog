import { ref } from 'vue';

const username = ref<string | null>(null);

export const useUserStore = () => {
  return { username };
};