<template>
  <div class="flex flex-col h-full">
    <div class="bg-teal-500 h-12 flex items-center px-3">
      <left-arrow-icon
        class="w-5 mr-3 cursor-pointer"
        @onClick="backButtonClick"
      />
      <span class="text-white text-xl">Chat</span>
    </div>
    <div class="flex-grow flex flex-col-reverse">11</div>
    <div class="flex items-center bg-teal-500 input-container p-3">
      <textarea
        autofocus
        class="flex-grow mr-3 input-box overflow-hidde text-lg px-2 resize-none"
        :style="{
          height: `${inputBoxHeight}px`,
          maxHeight: `${inputBoxMaxHeight}px`,
        }"
        ref="inputBox"
        @input="autoGrow"
        @keypress.enter="send"
      />
      <div class="h-full flex flex-col-reverse cursor-pointer" @click="send">
        <div class="mb-1">
          <send-icon class="h-6 w-6" />
        </div>
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
      return {
        inputBoxHeight: 30,
        inputBoxMaxHeight: 160,
        prevInputLineNumbers: 1,
      }
    },
    methods: {
      backButtonClick() {
        this.$router.back()
      },
      autoGrow() {
        const scrollHeight = this.$refs.inputBox.scrollHeight
        const lineNumbers = this.$refs.inputBox.value.split("\n").length
        if (this.prevInputLineNumbers != lineNumbers) {
          this.inputBoxHeight = lineNumbers == 1 ? 30 : lineNumbers * 26
          this.prevInputLineNumbers = lineNumbers
          this.$refs.inputBox.scrollTop = scrollHeight
        }
      },
      send() {
        alert("send")
      },
    },
  })
</script>
<style scoped>
  .input-container {
    min-height: 3rem;
  }
</style>
