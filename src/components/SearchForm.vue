<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const searchQuery = ref(props.modelValue);

watch(searchQuery, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <form class="form">
    <label for="default-search" class="label">Search</label>
    <div class="relative">
      <div class="search-icon">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input 
        type="search" 
        id="default-search" 
        class="input form-input caret-indigo input-normal" 
        placeholder="Search facts here"
        v-model="searchQuery"
        required 
      />
    </div>
  </form>
</template>

<style scoped>
  .form {
    @apply col-span-2 md:col-span-3 lg:col-span-4
  }
  .input {
    @apply p-4 ps-10 max-w-[375px];
  }

  .label {
    @apply mb-2 text-sm font-medium text-gray-900 sr-only;
  }

  .search-icon {
    @apply absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none;
  }

  .search-icon svg {
    @apply w-4 h-4 text-[#434343];
  }
</style>