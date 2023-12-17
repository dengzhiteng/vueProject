<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import 'normalize.css';
@import '@/assets/css/base.css';
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
html,
body,
#app {
  height: 100%;
}
</style>
