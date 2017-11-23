<template>
  <Form ref='loginForm' :rules="loginRules" :model='loginForm'>
    <FormItem prop="username">
      <Input type="text" v-model="loginForm.username">
      <Icon type="ios-person-outline" slot="prepend" ></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="loginForm.password">
      <Icon type="ios-locked-outline" slot="prepend" ></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('loginForm')" long>登录</Button>
    </FormItem>
  </Form>
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class SingIn extends Vue {
    loginForm = {
      username: '',
      password: ''
    }
    loginRules = {
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.dispatch('singin', this.loginForm).then(
            () => {
              this.$router.push({ path: '/' })
            },
            (res) => {
              this.$Message.error(`${res}登录失败，请检测用户名或密码`)
            }
          )
        }
      })
    }
  }
</script>
