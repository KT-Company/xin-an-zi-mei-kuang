<script setup>
import Layout from '@/views/Layout.vue'
import KtWatermark from '@/components/utils-ui/kt-watermark.vue'
import router from '@/router/index.js'
import { sendToUE, watchUEEvents } from '@/utils/useEventBus'
import Scene from '@/views/Scene.vue'
const showPixelStream = ref(false)
watchUEEvents({
  clickMesh: (data) => {
    console.log('data: ', data)
  },
})
onMounted(() => {
  // showPixelStream.value = window.kt_config.usePixelStream
  router.push('/') // 页面刷新重定向至首页
})
console.log('app')
</script>

<template>
  <KtWatermark :enable="false" style="pointer-events: none">
    <Layout />
    <!-- <kt-pixel-streaming-player v-if="showPixelStream" /> -->
    <!-- <Scene v-else /> -->
  </KtWatermark>
  <!-- <iframe src="http://127.0.0.1:5501/new3dgs.html" class="absolute bottom-[0px] left-[0px] w-[100%] h-[100%]" frameborder="0"></iframe> -->
</template>

<style scoped>
/* :global(#app) {
  height: 100%;
  width: 100%;
  pointer-events: none;
} */
</style>
