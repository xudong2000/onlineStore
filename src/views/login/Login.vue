<template>
  <div id="login">
    <div class="logo"><img src="../../assets/global/logo.png" alt="" /></div>
    <van-form @submit="onSubmit">
      <span class="title">登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        autoComplete="off"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #fff;
}
.logo {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.title {
  text-align: center;
  display: block;
  font-size: 16px;
}
</style>