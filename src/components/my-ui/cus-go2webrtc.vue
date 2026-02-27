<script setup>
import { ref, onMounted, watch, onBeforeUnmount, useAttrs } from 'vue'

const props = defineProps({
  url: {
    type: String,
    default: 'rtsp://admin:zy123456@172.16.89.128/streaming/channels/102',
    required: true,
  },
  ip: {
    type: String,
    default: window.kt_config.monitor_ip, // 默认ip（机房ip:http://192.168.3.99:1399）
  },
})

const attrs = useAttrs()

const videoContainerRef = ref(null)
let videoEl = null
// 创建 video-stream 元素
const createPlayer = () => {
  if (!videoContainerRef.value) return
  videoContainerRef.value.replaceChildren()

  videoEl = document.createElement('video-stream')

  let processedUrl = props.url

  if (processedUrl.startsWith('rtsp://') && !processedUrl.includes('@')) {
    const urlWithoutProtocol = processedUrl.substring(7)
    processedUrl = `rtsp://admin:zy123456@${urlWithoutProtocol}`
  }

  //   if (processedUrl.startsWith('rtsp://') && !processedUrl.startsWith('ffmpeg:')) {
  //     processedUrl = `ffmpeg:${processedUrl}#tcp=keepalive`
  //   }

  const rtspUrl = `${props.ip}/api/ws?rtspUrl=${encodeURIComponent(processedUrl)}`
  const Url = new URL(rtspUrl, location.href)

  videoEl.src = Url.href
  // console.log("🎥 video-stream src:", Url.href);

  // 附加透传的属性（比如 autoplay, muted）
  Object.entries(attrs).forEach(([key, value]) => {
    videoEl.setAttribute(key, value)
  })

  videoContainerRef.value.appendChild(videoEl)
}

// 销毁
const destroyPlayer = () => {
  if (videoEl) {
    videoEl.remove()
    videoEl = null
  }
}

// 监听 url 切换
watch(
  () => props.url,
  () => {
    destroyPlayer()
    createPlayer()
  }
)

// 初始化
onMounted(() => {
  createPlayer()
})

// 卸载时销毁
onBeforeUnmount(() => {
  destroyPlayer()
})
</script>

<template>
  <div ref="videoContainerRef" class="video-stream-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.video-stream-container {
  height: 100%;
  width: 100%;
}
</style>
