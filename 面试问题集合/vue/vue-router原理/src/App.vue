<template>
  <div id="app">
    <div class="nav">
      <div class="navList">
        <router-link to="/">首页</router-link>
        <router-link to="/classes">课程学习</router-link>
        <router-link to="/students">学员展示</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/activity">社区</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 #app .nav{
   display: flex;
   justify-content: center;
   height:60px;
   line-height:60px;
   background-color: #f40;
   overflow: hidden;
 }
 .nav .navList{
   width: 50vw;
   background-color: skyblue;
   display: flex;
   justify-content:space-around;
 }
 .nav .navList a{
   width: 5vw;
   text-align: center;
 }
 .nav .navList a:hover{
   background-color: rgb(100,20,150);
   cursor: pointer;
 }
</style>