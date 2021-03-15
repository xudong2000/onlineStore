<template>
  <div id="tabBar">
    <div>
      <van-icon name="wap-home-o" />
      <span>首页</span>
    </div>

    <div>
      <van-icon name="apps-o" />
      <span>分类</span>
    </div>

    <div>
      <van-icon name="more-o" />
      <span>消息</span>
    </div>

    <div>
      <van-icon name="shopping-cart-o" />
      <span>购物车</span>
    </div>

    <div>
      <van-icon name="manager-o" />
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style lang="less" scoped>
#tabBar {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: -1px 0 5px 0 #ccc;
  text-align: center;
  display: flex;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .van-icon {
    flex: 1;
    line-height: 40px;
    font-size: 25px;
  }
  span {
    flex: 1;
    line-height: 15px;
    font-size: 13px;
  }
}
</style>