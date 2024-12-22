<script setup lang="ts">
  import { ref, onMounted, inject, Ref } from 'vue';
  import { useRouter } from 'vue-router'; 


  const username = inject<Ref<string | null>>('username') || ref<string | null>(null);
  const inputName = ref<string>('');
  const errorMessage = ref<string>('');

  const router = useRouter();

  onMounted(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      username.value = storedName;
    }
  });

  const login = (): void => {
    const normalizedInput = inputName.value.trim();

  if (normalizedInput === '') {
    errorMessage.value = 'Please enter a valid name.';
    return;
  }

  if (normalizedInput.length < 3 || normalizedInput.length > 15) {
    errorMessage.value = 'User name length must be within 3 and 15 letters';
    return;
  }

  if (!/^[a-zA-Z]+$/.test(normalizedInput)) {
    errorMessage.value = 'User name must contain only letters';
    return;
  }

  localStorage.setItem('username', inputName.value.trim());
  username.value = inputName.value.trim();
  router.push('facts');

};
</script>

<template>
  <section class="flex-gap items-center justify-center mt-[115px]">
    <template v-if="username">
      <h2 class="font-bold text-2xl">Welcome, {{ username }}!</h2>
    </template>
    <template v-else>
      <h2 class="font-bold text-2xl" >Login</h2>
      <form 
        @submit.prevent="login"
        class="flex-gap w-full max-w-[410px]"
      >
        <label for="login" class="form-label">
          Name
          <input 
            id="login" 
            class="form-input input-normal caret-indigo" 
            name="login" 
            placeholder="Enter your name"
            v-model="inputName"
          >
          <p v-if="errorMessage" class="error-text">
            <span class="font-medium">Oh, snapp!</span> {{errorMessage}}
          </p>
        </label>

        <button type="submit" class="btn btn-blue">Log in</button>
      </form>
    </template>
  </section>
</template>


<style>
  /* general styles */

  .flex-gap {
    @apply flex flex-col gap-[50px];
  }

  /* button styles */
  .btn {
    @apply font-bold py-3 px-[90px] rounded self-center;
  }
  .btn-blue {
    @apply bg-[#6E72EC] text-white transition-colors;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }

  /* styles for input and label */
  .input-error {
    @apply focus:ring-red-500 border-red-500 text-red-900 focus:border-red-500 dark:border-red-500;
  }

  .error-text {
    @apply mt-2 text-sm text-red-600 dark:text-red-500
  }

</style>