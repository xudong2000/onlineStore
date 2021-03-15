<template>
  <div id="app">
    <van-search
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入您要搜索的商品名称"
      disabled
    />
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "./components/tabBar/TabBar";

export default {
  name: "App",
  components: {
    TabBar,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="less">
#app {
  height: 100vh;
  background-color: #efefef;
}
</style>
