<template>
  <div class="bg-gradient-to-br from-pink-400 to-blue-500 h-full">
    <h1>Hello Vue3</h1>
    <Button />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import Button from "../components/Button.vue"

  export default defineComponent({
    name: "Home",
    components: {
      Button,
    },
  })
</script>
