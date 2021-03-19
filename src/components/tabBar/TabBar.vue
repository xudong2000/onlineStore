<template>
  <div id="tabBar">
    <router-link to="/home">
      <van-icon name="wap-home-o" v-show="$route.path !== '/home'" />
      <van-icon name="wap-home" v-show="$route.path === '/home'" />
      <span>首页</span>
    </router-link>

    <router-link to="/category">
      <van-icon name="shop-collect-o" v-show="$route.path !== '/category'" />
      <van-icon name="shop-collect" v-show="$route.path === '/category'" />
      <span>分类</span>
    </router-link>

    <router-link to="/message">
      <van-icon name="more-o" v-show="$route.path !== '/message'" />
      <van-icon name="more" v-show="$route.path === '/message'" />
      <span>消息</span>
    </router-link>

    <router-link to="/cart">
      <van-icon name="shopping-cart-o" v-show="$route.path !== '/cart'" />
      <van-icon name="shopping-cart" v-show="$route.path === '/cart'" />
      <span>购物车</span>
    </router-link>

    <router-link to="/profile">
      <van-icon name="manager-o" v-show="$route.path !== '/profile'" />
      <van-icon name="manager" v-show="$route.path === '/profile'" />
      <span>我的</span>
    </router-link>
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
  a {
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
    font-size: 0.1625rem;
  }
}
</style>