<template>

  <div id="app">
    <div style="position: fixed;width: 100%;height: 100%;left: 50%;top: 20%">
      <Chat></Chat>
    </div>
    <router-view/>
  </div>
</template>

<script>
import city from '@/components/city'
import Chat from "./components/Chat";
  export default {
    name: 'App',
    components:{
      city,
      Chat
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
