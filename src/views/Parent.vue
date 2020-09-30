<template>
  <div>
    <h1>This is parent component.</h1>
    <Child v-bind:msg="'aaaaa'"></Child>
    <Child msg="这是船只" @showMsg="showMsg"></Child>
    <h5>{{ msg }}</h5>
    <h1>{{ count }}</h1>
    <button @click="add">增加count</button>
    <h1>{{ showValue }}</h1>
  </div>
</template>
<script>
import Child from "./Child";
import {mapMutations, mapState} from "vuex";
export default {
  name: "parent",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    Child
  },
  methods: {
    showMsg(val) {
      this.msg = val;
    },
    add() {
      this.$store.state.test.count++
      // this.$store.test.state.commit('add')
    },
    showValue() {
      return 1000
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapState({
      count: state => state.test.count
    })
  }
};
</script>
