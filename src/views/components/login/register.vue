<template>
  <Form ref='registerForm' :rules="registerRules" :model='registerForm' >
    <FormItem prop="username">
      <Input type="text" v-model="registerForm.username">
      <Icon type="ios-person-outline" slot="prepend" ></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="registerForm.password">
      <Icon type="ios-locked-outline" slot="prepend" ></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="registerForm.passwordCheck">
      <Icon type="ios-locked-outline" slot="prepend" ></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('registerForm')" long>注册</Button>
    </FormItem>
  </Form>
</template>
<script>
  import Axios from 'axios';

  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          const pwd = this.registerForm.passwordCheck;
          if (pwd !== '' && value !== pwd) {
            callback(new Error('两次的密码不一致'));
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          const pwd = this.registerForm.password;
          if (pwd !== '' && value !== pwd) {
            callback(new Error('两次的密码不一致'));
          }
          callback();
        }
      };
      return {
        registerForm: {
          username: '',
          password: '',
          passwordCheck: ''
        },
        registerRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwordCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            Axios.post('/api/login/register', this.registerForm).then(
              (res) => {
                console.log(res);
              });
          }
        });
      }
    }
  };
</script>
