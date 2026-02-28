<script setup>
import modelCpt from '@/components/my-ui/model-cpt.vue'
const data1 = ref({
  title: '设备信息',
  css: 'absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2',
  data: [
    { title: '设备名称', content: '扬尘噪音' },
    { title: '设备编号', content: 'YCZY-1' },
    { title: '安装位置', content: '一氧化碳传感器' },
    { title: '噪音大小', content: 'xxx' },
    { title: '报警状态', content: '正常' },
  ],
})
const data2 = ref({
  title: '设备信息',
  css: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  data: [
    { title: '设备名称', content: '扬尘噪音' },
    { title: '设备编号', content: 'YCZY-2' },
    { title: '安装位置', content: '一氧化碳传感器' },
    { title: '噪音大小', content: 'xxx' },
    { title: '报警状态', content: '正常' },
  ],
})
const data3 = ref({
  title: '设备信息',
  css: 'absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2',
  data: [
    { title: '设备名称', content: '扬尘噪音' },
    { title: '设备编号', content: 'YCZY-3' },
    { title: '安装位置', content: '一氧化碳传感器' },
    { title: '噪音大小', content: 'xxx' },
    { title: '报警状态', content: '正常' },
  ],
})
</script>

<template>
  <div class="absolute top-[0px] left-[0px] w-full h-full bg-[#fff] z-99 pointer-events-auto">
    <!-- <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[759px] h-[500px] bg-[url('@/assets/img/modelHtml/1.png')] bg-no-repeat bg-center bg-contain"
    >
      <p class="ml-[55px] mt-[25px] text-[28px] text-[#fff]">{{ data.title }}</p>
      <div class="ml-[25px] mt-[30px] w-[698px] flex flex-col gap-[16px]">
        <div v-for="(item, index) in data.data" key="index">
          <p class="w-full h-[50px] bg-[url('@/assets/img/modelHtml/2.png')] flex items-center justify-between pl-[15px] pr-[23px]">
            <span class="text-[24px] text-[#fff] opacity-80">{{ item.title }}</span>
            <span class="text-[24px] text-[#fff] opacity-80">{{ item.content }}</span>
          </p>
        </div>
      </div>
    </div> -->
    <model-cpt :data="data1" />
    <!-- <model-cpt :data="data2" />
    <model-cpt :data="data3" /> -->
  </div>
</template>

<style scoped></style>
