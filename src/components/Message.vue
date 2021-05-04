<template>
  <div class="flex justify-end items-end my-2">
    <div class="bg-white px-3 py-1 rounded-full text-gray-900">
      {{ message.text }}
    </div>
    <span class="ml-2 text-gray-900">{{ message.time }}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "Message",
    props: {
      message: {
        type: Object,
      },
    },
  })
</script>
