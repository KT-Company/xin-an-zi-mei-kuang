<template>
  <div class="kt-full kt-cus-table relative" :class="[sl]">
    <kt-pj-table v-bind="$attrs">
      <template v-for="(slotKey, slotIndex) in Object.keys($slots)" :key="slotIndex" #[slotKey]="params">
        <slot :name="slotKey" v-bind="params"></slot>
      </template>
    </kt-pj-table>
  </div>
</template>

<script setup>
// 该组件用来定制table样式
const props = defineProps({
  sl: {
    type: String,
    default: 's1',
  },
})
</script>

<style lang="less" scoped>
.s1 {
  :deep(.kt-table) {
    font-size: 12px;

    .kt-table-header {
      font-size: 20px;
      height: 31px;
      color: #62efd3;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('@/assets/img/table/1-title.png');
      span {
        margin-bottom: 2px;
      }
    }

    .kt-table-content > .kt-table-row {
      position: relative;
      align-items: center;
      font-size: 24px;
      height: 48px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      &:nth-child(2n) {
        background-image: url('@/assets/img/table/1-1.png');
      }
      &:nth-child(2n + 1) {
        background-image: url('@/assets/img/table/1-2.png');
      }
    }
  }
}
.s2 {
  :deep(.kt-table) {
    font-size: 20px;

    .kt-table-header {
      font-size: 20px;
      height: 31px;
      color: #62efd3;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      // background-image: url('@/assets/img/table/1-title.png');

      padding-bottom: 4px;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 28px;
        height: 4px;
        background: url('@/assets/img/table/1-3.png') center / 100% 100% no-repeat;
        pointer-events: none;
      }
      span {
        margin-bottom: 2px;
      }
    }

    .kt-table-content > .kt-table-row {
      position: relative;
      align-items: center;
      font-size: 24px;
      height: 48px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      &:nth-child(2n) {
        background-image: url('@/assets/img/table/1-1.png');
      }
      &:nth-child(2n + 1) {
        background-image: url('@/assets/img/table/1-2.png');
      }
    }
  }
}
</style>
