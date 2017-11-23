<template>
	<div class="login-container">
    <div class="login-form">
      <components :is="currentComp"></components>
      <div v-if="currentComp === 'SingIn'" @click="currentComp='Register'">
        <a href="javascript:;">注册</a>
      </div>
      <div v-else @click="currentComp='SingIn'">
        <a href="javascript:;">登录</a>
      </div>
      <a href="javasript:;" @click="checkLogin">检测是否登录</a>
    </div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Axios from 'axios'
  import SingIn from './components/login/singin.vue'
  import Register from './components/login/register.vue'

  @Component({
    components: {
      SingIn,
      Register
    }
  })
  export default class App extends Vue {
    currentComp = 'SingIn'
    checkLogin() {
      Axios.post('/api/login/check').then(
        (res) => {
          console.log(this.currentComp, res)
        })
    }
  }
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
