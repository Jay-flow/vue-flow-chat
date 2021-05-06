<template>
  <img :src="src" class="w-12 h-12 object-cover rounded-full" />
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "CircleImage",
    props: {
      src: {
        type: String,
      },
    },
  })
</script>
