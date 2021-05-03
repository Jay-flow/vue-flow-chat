<template>
  <div
    class="bg-gradient-to-br from-pink-400 to-blue-500 h-full flex flex-col justify-between"
  >
    <div class="flex-grow flex justify-center items-center flex-col">
      <fade>
        <span class="font-dancing text-9xl text-white">{{ appName }}</span>
      </fade>
    </div>
    <div class="flex flex-col p-5">
      <Button @onClick="goToChatPage">Start</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import Button from "../components/Button.vue"
  import Fade from "../components/animations/Fade.vue"
  import { appName } from "../assets/constatns"

  export default defineComponent({
    name: "Home",
    components: {
      Button,
      Fade,
    },
    data() {
      return {
        appName,
        showTitle: false,
      }
    },
    methods: {
      goToChatPage() {
        this.$router.push("/chat")
      },
    },
  })
</script>
