<template>
  <div class="result-container">
    <div class="result-bg-img">
      <img v-if="type == '404'" src="@/assets/images/404.png" alt="">
      <img v-if="type == 'maintenance'" src="@/assets/images/maintenance.png" alt="">
      <img v-if="type == '500'" src="@/assets/images/500.png" alt="">
    </div>
    <div class="result-title">{{ title }}</div>
    <div class="result-tip">{{ tip }}</div>
    <slot />
  </div>
</template>
<script setup lang="ts">
  
  const props = defineProps({
    title: String,
    tip: String,
    type: String,
  });

  
</script>
<style lang="less" scoped>
  .result-container {
    min-height: 400px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;

    .result-bg-img {
      img {
        width: 300px;
      }
    }

    .result-title {
      font-style: normal;
      font-weight: 500;
      margin-top: 8px;
      color: var(--td-text-color-primary);
      font-size: 20px;
      line-height: 28px;
    }

    .result-tip {
      margin: 8px 0 32px;
      font-size: 14px;
      color: var(--td-text-color-secondary);
      line-height: 22px;
    }
  }
</style>