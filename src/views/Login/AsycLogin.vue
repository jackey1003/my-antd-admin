<template>
    <Suspense>
        <AsyncComp></AsyncComp>
        <template #fallback>
            <div v-loading="true" class="loading"></div>
        </template>
    </Suspense>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
//定义一个异步组件
const AsyncComp = defineAsyncComponent(() =>
  import('./index.vue')
)
</script>
<style scoped lang='scss'>
.loading{
    position: fixed;
    top: 50%;
    left:50%
}
</style>
