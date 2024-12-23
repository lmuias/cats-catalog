<script setup>
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <footer class="bg-[#121212] text-white px-5 py-8 lg:px-[72px]">
    <div class="flex flex-col items-center pb-14 gap-10 md:flex-row md:justify-between">
      <li>
        <RouterLink to="/" class="block h-auto transition-transform hover:scale-95">
          <img src="@/assets/whiteLogo.png" alt="Logo" />
        </RouterLink>
      </li>
      <div class="flex flex-col gap-6 md:flex-row md:justify-between md:gap-14 lg:gap-24">
        <nav>
          <p class="font-bold mb-2">Built for catlovers</p>
          <ul>
            <li>
              <a href="" class="opacity-80 transition-opacity hover:opacity-100">About</a>
            </li>
            <li>
              <a href="" class="opacity-80 transition-opacity hover:opacity-100">Blog</a>
            </li>
          </ul>
        </nav>
        <nav>
          <p class="font-bold mb-2">Socials</p>
          <ul class="flex gap-6 items-center">
            <li>
              <a target="_blank" href="https://www.instagram.com/" class="socials-link">
                <img src="@/assets/socials/InstagramLogo.svg" alt="instagram-icon">
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/" class="socials-link">
                <img src="@/assets/socials/FacebookLogo.svg" alt="facebook-icon">
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/" class="socials-link">
                <img src="@/assets/socials/YoutubeLogo.svg" alt="youtube-icon">
              </a>
            </li>
            <li>
              <a target="_blank" href="https://x.com/" class="socials-link">
                <img src="@/assets/socials/XLogo.svg" alt="twitter-icon">
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="border-t-2 border-[#8E8E8E] pt-8 flex justify-between gap-5">
      <p class="opacity-80 socials-link cursor-pointer">@cats.com inc. All rights reserved.</p>
      <p class="flex items-center gap-1 socials-link cursor-pointer">
        <span>English</span>
        <ChevronDownIcon class="-mr-1 size-6 text-[#FFFFFF]" aria-hidden="true" />
      </p>
    </div>
  </footer>
</template>

<style>
  .socials-link {
    @apply transition-opacity hover:opacity-60
  }

</style>