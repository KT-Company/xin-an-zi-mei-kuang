<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="w-[759px] h-[500px] bg-[url('@/assets/img/modelHtml/1.png')] bg-no-repeat bg-center bg-contain" :class="data.css">
    <p class="ml-[55px] mt-[25px] text-[28px] text-[#fff]">{{ data.title }}</p>
    <div class="ml-[25px] mt-[30px] w-[698px] flex flex-col gap-[16px]">
      <div v-for="(item, index) in data.data" key="index">
        <p class="w-full h-[50px] bg-[url('@/assets/img/modelHtml/2.png')] flex items-center justify-between pl-[15px] pr-[23px]">
          <span class="text-[24px] text-[#fff] opacity-80">{{ item.title }}</span>
          <span class="text-[24px] text-[#fff] opacity-80">{{ item.content }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
