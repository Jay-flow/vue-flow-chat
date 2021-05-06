<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center px-3 bg-teal-400 h-12">
      <left-arrow-icon
        class="w-5 mr-3 cursor-pointer"
        @onClick="backButtonClick"
      />
      <span class="text-white text-xl">Chat</span>
    </div>
    <div
      class="h-full flex flex-col-reverse relative overflow-y-auto bg-teal-400 p-3"
      ref="messageContainer"
    >
      <fade
        v-show="isNotifyKeyInfo"
        class="absolute top-0 left-0 text-center w-full"
      >
        <span class="text-xs text-gray-900">
          입력 중 Shift + Enter를 누르시면 메세지를 상대방에게 바로 전송할 수
          있습니다.
        </span>
      </fade>
      <message
        class="w-full"
        v-for="(message, idx) in messages"
        :message="message"
        :key="idx"
      ></message>
    </div>
    <div class="flex p-3">
      <div
        ref="inputBox"
        contenteditable="true"
        autofocus
        class="flex-grow h-auto max-h-40 overflow-auto focus-visible:outline-none text-xl"
        @keypress.enter.exact.prevent="send"
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
  import Message from "../components/Message.vue"
  import { getNowDate } from "../utils/formating"

  export default defineComponent({
    name: "Chat",
    components: {
      LeftArrowIcon,
      SendIcon,
      Fade,
      Message,
    },
    data() {
      return {
        isNotifyKeyInfo: true,
        messages: [],
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

        this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight
      },
      getTime() {
        const date = getNowDate()
        const minutes = String(date.minutes).padStart(2, "0")
        if (date.hours >= 12) {
          return `${date.hours - 11}:${minutes} PM`
        }
        return `${date.hours}:${minutes} AM`
      },
      send() {
        const sendText = this.$refs.inputBox.innerText

        if (sendText.length != "") {
          this.messages.unshift({
            text: sendText,
            time: this.getTime(),
            author: "태연",
            isItMe: Math.random() < 0.5,
          })
          this.cleanUpInput()
        }
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
