<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center p-3 bg-teal-400 h-12">
      <left-arrow-icon
        class="w-5 mr-3 cursor-pointer"
        @click="backButtonClick"
      />
      <span class="text-white text-xl">Chat</span>
    </div>
    <div
      class="h-full flex flex-col-reverse relative overflow-y-auto bg-teal-400 p-3"
      ref="messageContainer"
    >
      <fade
        v-show="isNotifyKeyInfo"
        class="absolute top-0 left-0 text-center w-full px-20"
      >
        <span class="text-xs text-gray-900">
          입력 중 Shift + Enter를 누르시면 줄을 바꿔 메세지를 작성할 수
          있습니다.
        </span>
      </fade>
      <message
        class="w-full"
        v-for="(message, idx) in messages"
        :message="message"
        :key="idx"
      >
        <span
          v-if="message.type === 'text'"
          class="bg-white px-3 py-1 rounded-md text-gray-900 break-all whitespace-pre-line"
        >
          {{ message.content }}
        </span>
        <img
          v-else-if="message.type === 'image'"
          :src="message.content"
          class="rounded-md max-h-60"
        />
        <video
          v-else-if="message.type === 'video'"
          :src="message.content"
          class="max-h-60"
          controls
        ></video>
      </message>
      <!-- <img :src="image" /> -->
    </div>
    <div class="flex items-end px-5 py-3">
      <div class="cursor-pointer" @click="showFunctions">
        <plus-icon class="h-6 w-6 fill-current text-gray-900" />
      </div>
      <div
        ref="inputBox"
        contenteditable="true"
        autofocus
        class="flex-grow max-h-40 overflow-auto focus-visible:outline-none text-base mx-3"
        @keypress.enter.exact.prevent="send($refs.inputBox.innerText, 'text')"
      ></div>
      <div
        class="cursor-pointer"
        @click="send($refs.inputBox.innerText, 'text')"
      >
        <send-icon class="h-6 w-6 fill-current text-gray-900" />
      </div>
    </div>
    <div
      v-show="isShowFunctions"
      class="bg-white h-24 w-full flex items-center p-4 border-t border-gray-100"
    >
      <input
        type="file"
        accept="image/*"
        @change="uploadFile"
        class="hidden"
        ref="inputImage"
        multiple
      />

      <input
        type="file"
        accept="video/*"
        @change="uploadFile"
        class="hidden"
        ref="inputVideo"
      />

      <div
        class="flex flex-col justify-center items-center cursor-pointer mr-5"
        @click="$refs.inputImage.click()"
      >
        <div
          class="bg-pink-500 rounded-full w-14 h-14 flex justify-center items-center mb-1.5"
        >
          <gallery-icon class="h-6 fill-current text-white" />
        </div>
        <span class="text-xs">Photo</span>
      </div>
      <div
        class="flex flex-col justify-center items-center cursor-pointer"
        @click="$refs.inputVideo.click()"
      >
        <div
          class="bg-purple-500 rounded-full w-14 h-14 flex justify-center items-center mb-1.5"
        >
          <video-icon class="h-6 fill-current text-white" />
        </div>
        <span class="text-xs">Video</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import LeftArrowIcon from "../components/svg/LeftArrowIcon.vue"
  import SendIcon from "../components/svg/SendIcon.vue"
  import PlusIcon from "../components/svg/PlusIcon.vue"
  import GalleryIcon from "../components/svg/GalleryIcon.vue"
  import VideoIcon from "../components/svg/VideoIcon.vue"
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
      PlusIcon,
      GalleryIcon,
      VideoIcon,
    },
    data() {
      return {
        isNotifyKeyInfo: true,
        isShowFunctions: true,
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
          return `${date.hours - 12}:${minutes} PM`
        }
        return `${date.hours}:${minutes} AM`
      },
      send(message, type) {
        if (message.length != "") {
          this.messages.unshift({
            content: message,
            type: type,
            time: this.getTime(),
            author: "태연",
            isItMe: Math.random() < 0.5,
          })
          if (type === "text") {
            this.cleanUpInput()
          }
        }
      },
      showFunctions() {
        this.isShowFunctions = !this.isShowFunctions
      },
      calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
        return { width: srcWidth * ratio, height: srcHeight * ratio }
      },
      resizeImage() {
        this.calculateAspectRatioFit()
      },
      uploadFile(e) {
        for (let file of e.target.files) {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = (e) => {
            const preView = e.target?.result
            const fileType = file.type.match(/image.*/) ? "image" : "video"
            this.send(preView, fileType)
          }
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
