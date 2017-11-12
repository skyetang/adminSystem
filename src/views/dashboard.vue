<template>
    <div>
      主页
      <button @click="logout">退出</button>
    </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({ path: '/login' });
        });
      }
    }
  };
</script>


