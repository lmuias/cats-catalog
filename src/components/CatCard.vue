<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { Cat } from '@/types/CatType';
import { useRouter } from 'vue-router';

const props = defineProps<{
  catImg: string;
  cat: Cat;
}>();

const router = useRouter();

const truncatedDescription = computed(() => {
  let description = props.cat.fact;
  let length = props.cat.length;

  if (length < 100) {
    return description;
  } else {
    description = description.substring(0, 100) + '...';
  }

  return description;
})

const viewCatDetails = (cat: Cat) => {
  router.push({
    name: 'fact',
    query: {
      cat: JSON.stringify(cat),
    },
  });
};

const isShortDescription = computed(() => props.cat.length < 100);
</script>

<template>
  <RouterLink to="/fact" @click="viewCatDetails(props.cat)" class="cat-card">
    <img :src="catImg" alt="Cat Image" class="cat-image" />
    <div class="cat-info">
      <p :class="{ 'bold-text': isShortDescription }">
        {{ truncatedDescription }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.cat-card {
  @apply rounded-lg col-span-2 md:col-span-3 lg:col-span-4 flex flex-col gap-6 transition-colors hover:bg-[#EBECFF] cursor-pointer;
}

.cat-image {
  @apply w-full min-h-[254px]
}

.cat-info {
  @apply text-lg text-[#333] p-4;
}

.bold-text {
  @apply font-bold text-2xl;
}

</style>