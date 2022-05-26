<template>
  <result title="系统维护中" tip="系统维护中，请稍后再试" type="maintenance">
    <t-button @click="() => $router.push('/')">返回首页</t-button>
  </result>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'
  import Result from '@/components/result/index.vue';
  export default defineComponent({
    name: '404',
    components: {
      Result
    }
  })
</script>