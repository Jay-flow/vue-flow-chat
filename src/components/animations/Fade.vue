<template>
  <transition
    appear
    enter-active-class="transition-opacity duration-1000 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-1000 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot />
  </transition>
</template>

<script>
  export default {
    name: "Fade",
  }
</script>
