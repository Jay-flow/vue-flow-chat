<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center px-3 bg-teal-400 h-12">
      <left-arrow-icon
        class="w-5 mr-3 cursor-pointer"
        @onClick="backButtonClick"
      />
      <span class="text-white text-xl">Chat</span>
    </div>
    <div class="flex-grow flex flex-col-reverse bg-teal-400 p-3 relative">
      <fade
        v-show="isNotifyKeyInfo"
        class="absolute top-0 left-0 text-center w-full"
      >
        <span class="text-xs text-gray-900">
          입력 중 Shift + Enter를 누르시면 메세지를 상대방에게 바로 전송할 수
          있습니다.
        </span>
      </fade>
      <div class="flex justify-end items-end">
        <span class="mr-2 text-gray-900">11:30</span>
        <div class="bg-white px-3 py-1 rounded-full text-gray-900">
          Hello world!
        </div>
      </div>
      <div class="flex justify-start items-end">
        <div class="bg-white px-3 py-1 rounded-full text-gray-900">
          How are you?
        </div>
        <span class="ml-2 text-gray-900">11:30</span>
      </div>
    </div>
    <div class="flex border-t p-3">
      <div
        ref="inputBox"
        contenteditable="true"
        autofocus
        class="flex-grow h-auto max-h-40 overflow-auto focus-visible:outline-none text-xl"
        @keydown.shift.enter.prevent="send"
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
  import Fade from "../components/animations/Fade.vue"

  export default defineComponent({
    name: "Chat",
    components: {
      LeftArrowIcon,
      SendIcon,
      Fade,
    },
    data() {
      return {
        isNotifyKeyInfo: true,
      }
    },
    mounted() {
      setTimeout(() => {
        this.isNotifyKeyInfo = false
      }, 5000)
    },
    methods: {
      backButtonClick() {
        this.$router.back()
      },
      cleanUpInput() {
        this.$refs.inputBox.innerText = ""
        this.$refs.inputBox.focus()
      },
      send() {
        const sendText = this.$refs.inputBox.innerText
        this.cleanUpInput()
      },
      pressKeyHandler(event) {
        console.log(event)
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
