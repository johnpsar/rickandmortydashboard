<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Inter:200,300,400,500,600,700,800&display=swap&text=0123456789");
#app {
  height: 100%;
  width: 100%;
}
html,
body {
  font-size: 14px;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #272b33;
}

* {
  font-family: "Inter", "Sofia Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-variant-numeric: lining-nums;
  user-select: none;
}
</style>
