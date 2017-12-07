<template>
  <div class="login-container">
    <img :src="bg" class="login-bg">
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
  import bg1 from '../assets/images/bg1.jpeg';
  import bg2 from '../assets/images/bg2.jpeg';
  import bg3 from '../assets/images/bg3.jpg';
  import bg4 from '../assets/images/bg4.jpeg';

  export default {
    components: {
      Singin,
      Register
    },
    name: 'login',
    data() {
      return {
        currentComp: 'Singin',
        timer: null,
        bg: bg1,
        bg1,
        bg2,
        bg3,
        bg4
      };
    },
    mounted() {
      this.randomBg();
    },
    methods: {
      checkLogin() {
        Axios.post('/api/login/check').then(
          (res) => {
            console.log(res.data.message);
          });
      },
      randomBg() {
        const num = Math.floor(Math.random() * 6);
        switch (num) {
          case 1:
            this.bg = this.bg1;
            break;
          case 2:
            this.bg = this.bg2;
            break;
          case 3:
            this.bg = this.bg3;
            break;
          default:
            this.bg = this.bg4;
            break;
        }
      }
    }
  };
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
