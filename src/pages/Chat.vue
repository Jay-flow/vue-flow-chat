<template>
  <div class="flex flex-col">
    <div class="bg-teal-500 h-12 flex items-center">
      <left-arrow-icon
        class="w-5 mx-2 cursor-pointer"
        @onClick="backButtonClick"
      />
      <span class="text-white text-xl">Chat</span>
    </div>
    <div class="flex flex-col-reverse"></div>
    <span>It's Chat page</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import LeftArrowIcon from "../components/svg/LeftArrowIcon.vue"

  export default defineComponent({
    name: "Chat",
    components: {
      LeftArrowIcon,
    },
    methods: {
      backButtonClick() {
        this.$router.back()
      },
    },
  })
</script>
