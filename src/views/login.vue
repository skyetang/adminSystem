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

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import Axios from 'axios';
  import Singin from './components/login/singin.vue';
  import Register from './components/login/register.vue';

  @Component({
    name: 'login',
    components: {
      Singin,
      Register
    }
  })
  export default class Login extends Vue {
    data() {
      return {
        currentComp: 'Singin',
        timer: null,
      };
    }
    checkLogin():void {
      Axios.post('/api/check').then(
        (res) => {
          console.log(res.data.message);
        });
    }
  }
</script>

<style lang="less">
  .login-container{
    height: 100vh;
    overflow: hidden;
  }
  .login-bg{
    width: 100%;
    height: 100%;
    animation: fadeInOut .5s ease;
  }
  @-webkit-keyframes fadeInOut {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  .login-form {
    position: absolute;
    top: 50%;
    right: 160px;
    width: 300px;
    transform: translateY(-60%);
    padding: 20px;
    background-color: rgba(255,255,255,.99);
    border-radius: 5px;

    input{
      background-color: rgba(255,255,255,.1);
      padding: 12px 5px 12px 15px;
    }
  }
</style>
