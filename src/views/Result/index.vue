<template>
  <div class="container">
    <div class="square" style="--d: 1"></div>
    <div class="square" style="--d: 2"></div>
    <div class="square" style="--d: 3"></div>
    <div class="square" style="--d: 4"></div>
    <div class="square" style="--d: 5"></div>
    <div class="square" style="--d: 6"></div>
    <div class="square" style="--d: 7"></div>
    <div class="square" style="--d: 8"></div>
    <div class="square" style="--d: 9"></div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
$w: 80px;
.container {
  height: calc($w * 5);
  width: calc($w * 5);
  padding: $w;
  margin: 100px 500px;
  box-shadow: 0 12px 20px 6px rgb(104 112 118 / 0.2);
  border-radius: calc($w / 2);
  display: flex;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateZ(45deg);
}
.square {
  height: $w;
  width: $w;
  background-color: rgb(207, 52, 40);
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ($w);
  box-shadow: calc($w * 3) calc($w * 3) 15px rgba(0, 0, 0, 0.2);
  animation: beating 1s infinite;
  animation-delay: calc(0.05s * var(--d));
}
.square:hover {
  cursor: pointer;
  filter: brightness(2.1);
}
.square:after,
.square:before {
  content: "";
  position: absolute;
  height: $w;
  width: $w;
  left: 0;
  top: 0;
}
.square:before {
  background-color: rgb(56, 35, 35);
  transform: rotateY(-90deg);
  transform-origin: right center;
}
.square:after {
  background-color: rgb(80, 39, 36);
  transform: rotateX(90deg);
  transform-origin: right bottom;
}
@keyframes beating {
  50% {
    transform: translateZ(calc($w / 2));
  }
}
</style>
