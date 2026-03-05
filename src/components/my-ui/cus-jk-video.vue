<script setup>
const props = defineProps({
  url: {
    type: String,
    default: '',
  },
  uid: {
    type: String,
    default: 'KTU-001',
  },
  title: {
    type: String,
    default: '大厅-A门',
  },
  status: {
    type: String,
    default: 'normal',
  },
  playerType: {
    type: String,
    default: 'xgplayer', // 可选值: "xgplayer" | "webrtc"
  },
})

</script>

<template>
  <div class="bg-[url('@/assets/img/12.png')] h-[33px] w-[192px] kt-bg-full ml-[33px] text-[24px] pl-[33px] mr-[475px]">{{ title }}</div>
  <div class="w-[647px] h-[362px] font-SHSC text-[14px] kt-bg-full relative kt-flex">
    <cus-go2webrtc :url="url" />
  </div>
</template>

<style scoped lang="less"></style>
