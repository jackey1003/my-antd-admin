<template>
  <div class="error">
    <a-empty :description="'404 NOT FOUND'" class="empty" />
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.error {
  height: 100%;
  background: #fff;
  position: relative;
  .empty{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
}
</style>
