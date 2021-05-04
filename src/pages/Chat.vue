<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center px-3 bg-teal-400 h-12">
      <left-arrow-icon
        class="w-5 mr-3 cursor-pointer"
        @onClick="backButtonClick"
      />
      <span class="text-white text-xl">Chat</span>
    </div>
    <div class="flex-grow flex flex-col-reverse bg-teal-400">11</div>
    <div class="flex border-t p-3">
      <div
        contenteditable="true"
        class="flex-grow h-auto max-h-40 overflow-auto focus-visible:outline-none text-xl"
      ></div>
      <div
        class="flex items-end pb-0.5 w-10 h-full px-2 cursor-pointer"
        @click="send"
      >
        <send-icon class="h-6 w-6 fill-current text-gray-900" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import LeftArrowIcon from "../components/svg/LeftArrowIcon.vue"
  import SendIcon from "../components/svg/SendIcon.vue"

  export default defineComponent({
    name: "Chat",
    components: {
      LeftArrowIcon,
      SendIcon,
    },
    data() {
      return {}
    },
    methods: {
      backButtonClick() {
        this.$router.back()
      },
      send() {
        alert("send")
      },
    },
  })
</script>
<style scoped>
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
</style>
