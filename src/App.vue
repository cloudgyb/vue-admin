<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
    <button @click="sendMsg">通过总线bus向其他组件传值</button>
  </div>
</template>
<script>
import bus from "./utils/bus";
export default {
  methods: {
    sendMsg() {
      bus.$emit("msg", "数据来自数据总线bus");
    }
  }
};
</script>

<style lang="scss"></style>
