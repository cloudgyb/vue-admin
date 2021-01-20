<template>
  <div>
    <h3>This is a child component.</h3>
    <h4>{{ msg }}</h4>
    <button @click="sendMsg">向父组件传值</button>
    <h5>{{ mess }}</h5>
  </div>
</template>

<script>
import bus from "../utils/bus";
export default {
  name: "Child",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mess: ""
    };
  },
  methods: {
    sendMsg() {
      this.$emit("showMsg", "这是Child传过来的数据！");
    }
  },
  mounted() {
    bus.$on("msg", val => {
      this.mess = val;
    });
  }
};
</script>
