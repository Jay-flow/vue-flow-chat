<template>
  <button
    class="bg-white hover:bg-gray-200 font-bold py-2 px-4 rounded"
    @click="$emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "Button",
    emits: ["onClick"],
  })
</script>
