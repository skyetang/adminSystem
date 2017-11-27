<template>
    <div class="main">
      <div class="sidebar">
        <div class="logo">
          Admin
        </div>
        <Menu theme="dark">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"></Icon>
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </div>
      <div class="header">
        Dashboard
      </div>
      <div class="content">1123</div>
    </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({ path: '/login' })
        })
      }
    }
  }
</script>
<style lang="less">
  .main{
    width: 100%;
    height: 100%;
    .logo{
      height: 60px;
      background-color: darkslateblue;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    .sidebar{
      position: fixed;
      background-color: #495060;
      top: 0;
      left: 0;
      height: 100%;
      width: 240px;
    }

    .header{
      position: fixed;
      width: 100%;
      height: 60px;
      padding-left: 240px;
      left: 0;
      top:0;
    }

    .content{
      position: absolute;
      width: 100%;
      top: 60px;
      left: 240px;
      right: 0;
      bottom:0;
      background-color: #f0f0f0;
    }
  }
</style>


