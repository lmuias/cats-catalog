<script setup>
import { ref } from 'vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, ChevronUpIcon  } from '@heroicons/vue/20/solid'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectOption = (option) => {
  emit('update:modelValue', option);
  isOpen.value = false;
};
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div class="w-[300px]">
      <MenuButton 
        class="menu-button" 
        @click="isOpen = !isOpen"
      >
      {{ modelValue }}
        <ChevronDownIcon v-if="!isOpen" class="-mr-1 size-6 text-[#434343]" aria-hidden="true" />
        <ChevronUpIcon v-if="isOpen" class="-mr-1 size-6 text-[#434343]" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="menu-items" @click="isOpen = false">
        <div class="py-1">
          <MenuItem class="menu-item" @click="selectOption('All facts')">
            <p 
              :class="[
                  'menu-link', 
                  modelValue === 'All facts' ? 'menu-link-active' : ''
                ]"
            >
              All facts
            </p>
          </MenuItem>
          <MenuItem class="menu-item" @click="selectOption('Show long ones first')" >
            <p 
              :class="[
                'menu-link', 
                modelValue === 'Show long ones first' ? 'menu-link-active' : ''
              ]"
            >
              Show long ones first
            </p>
          </MenuItem>
          <MenuItem class="menu-item"@click="selectOption('Show short ones first')" >
            <p 
              :class="[
                'menu-link', 
                modelValue === 'Show short ones first' ? 'menu-link-active' : ''
              ]"
            >
              Show short ones first
            </p>
          </MenuItem>
          <MenuItem class="menu-item" @click="selectOption('Short ones only')" >
            <p 
              :class="[
                'menu-link', 
                modelValue === 'Short ones only' ? 'menu-link-active' : ''
              ]"
            >
              Short ones only
            </p>
          </MenuItem>
          <MenuItem class="menu-item" @click="selectOption('Long ones only')" >
            <p 
              :class="[
                'menu-link', 
                modelValue === 'Long ones only' ? 'menu-link-active' : ''
              ]"
            >
              Long ones only
            </p>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
  .menu-button {
    @apply inline-flex w-full justify-between gap-x-1.5 rounded-md bg-[#EBECFF] px-4 py-3 text-sm font-semibold shadow-sm transition-colors hover:bg-[#D6D8FF];
  }

  .menu-items {
    @apply absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-[#EBECFF] shadow-lg focus:outline-none w-[300px];
  }

  .menu-item {
    @apply relative cursor-pointer
  }

  .menu-link {
    @apply block px-4 py-2 text-sm bg-[#EBECFF] transition-colors hover:bg-[#D6D8FF];
  }

  .menu-link-active {
    @apply text-[#6E72EC]
  }

  .menu-link-active::after {
    @apply block absolute content-[''] w-6 h-6 bg-[url('@/assets/check.svg')] right-4 top-1
  }

</style>