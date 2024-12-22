<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/facts"
        class="text-lg transition-colors text-[#434343] hover:text-[#636AF2] flex items-center"
      >
        <i class="pi pi-angle-left mr-3"></i> Back
      </RouterLink>
    </div>
  </section>
</template>