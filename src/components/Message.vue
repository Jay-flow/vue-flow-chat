<template>
  <div class="flex items-start my-2" :class="{ 'justify-end': message.isItMe }">
    <circle-image
      v-if="!message.isItMe"
      src="https://i.pinimg.com/originals/d5/58/46/d55846793dea72b5918903f3fb0d85ad.png"
      class="mr-2 mt-1"
    />
    <div class="flex flex-col flex-wrap max-w-3/4">
      <span v-if="!message.isItMe" class="text-sm ml-1 mb-0.5">{{
        message.author
      }}</span>
      <span
        class="bg-white px-3 py-1 rounded-md text-gray-900 break-all whitespace-pre-line"
      >
        {{ message.text }}
      </span>
    </div>
    <span
      class="text-gray-900 self-end text-xs"
      :class="{
        'order-first mr-1.5': message.isItMe,
        'ml-1.5': !message.isItMe,
      }"
      >{{ message.time }}</span
    >
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import CircleImage from "./CircleImage.vue"

  export default defineComponent({
    name: "Message",
    components: {
      CircleImage,
    },
    props: {
      message: {
        type: Object,
      },
    },
  })
</script>
