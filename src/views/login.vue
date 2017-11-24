<template>
  <div class="login-container">
    <div class="login-form">
      <components :is="currentComp"></components>
      <div v-if="currentComp === 'Singin'" @click="currentComp='Register'">
        <a href="javascript:;">注册</a>
      </div>
      <div v-else @click="currentComp='Singin'">
        <a href="javascript:;">登录</a>
      </div>
      <a href="javasript:;" @click="checkLogin">检测是否登录</a>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios';
  import Singin from './components/login/singin';
  import Register from './components/login/register';

  export default {
    components: {
      Singin,
      Register
    },
    name: 'login',
    data() {
      return {
        currentComp: 'Singin'
      };
    },
    methods: {
      checkLogin() {
        Axios.post('/api/login/check').then(
          (res) => {
            console.log(res);
          });
      }
    }
  };
</script>

<style lang="less">
  .login-container{
    height: 100vh;
    background: url('../assets/black2.jpeg') center center;
    background-size: cover;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 280px 120px auto auto;

    input{
      background-color: rgba(255,255,255,.1);
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    }

  }
</style>
