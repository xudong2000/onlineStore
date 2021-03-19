<template>
  <div id="visitor" v-if="true">
    <van-cell title="" value="">
      <van-button type="info" size="small" round @click="toLogin"
        >去登录</van-button
      >
    </van-cell>
    <div class="box">
      <img
        src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
        alt=""
        class="cartImg"
      />
      <span>登录后可查看您的购物车订单</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Visitor",
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
#visitor {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  .box {
    width: 220px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .cartImg {
      width: 90px;
      height: 90px;
      margin-bottom: 10px;
    }
  }
}
</style>