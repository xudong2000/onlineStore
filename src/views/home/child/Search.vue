<template>
  <div id="search">
    <van-search
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="iPhone12"
      disabled
      @click="search"
    />

    <van-popup
      v-model="show"
      closeable
      close-icon="revoke"
      close-icon-position="top-left"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <van-search
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="请输入您要搜索的商品名称"
        :style="{ width: '75%', marginLeft: '10%' }"
        @click="search"
      />

      <van-button round type="info" size="small">搜索</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      value: "",
      show: false,
    };
  },
  methods: {
    search() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.van-button--round {
  position: absolute;
  right: 5%;
  top: 2%;
}
</style>