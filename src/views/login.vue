<template>
	<div class="login-container">
	 <Form ref='loginForm' :rules="loginRules" :model='loginForm' class="card-box login-form">
		<FormItem prop="username">
			<Input type="text" v-model="loginForm.username" placeholder=username>
				<Icon type="ios-person-outline" slot="prepend" ></Icon>
			</Input>
		</FormItem>
		<FormItem prop="password">
			<Input type="text" v-model="loginForm.password" placeholder=password>
				<Icon type="ios-locked-outline" slot="prepend" ></Icon>
			</Input>
		</FormItem>
		<FormItem>
      <Button type="primary" @click="handleSubmit('loginForm')" long>登录</Button>
    </FormItem>
	 </Form>
	</div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$store.dispatch('singin', this.loginForm).then(
              () => {
                this.$router.push({ path: '/' });
              },
              (res) => {
                this.$Message.error(`${res}登录失败，请检测用户名或密码`);
              }
            );
          }
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
