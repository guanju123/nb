<template>
  <div id="foot-list">
    <ul>
       <router-link to="/home" tag = 'li' active-class = 'active'><a href="javascript:;" ><img src="../assets/img/nav12.png"><span>首页</span></a></router-link>
       <router-link to="/duanxian" tag = 'li' active-class = 'active'><a href="javascript:;" ><img src="../assets/img/nav21.png"><span>超短线</span></a></router-link>
       <router-link to="/jigou" tag = 'li' active-class = 'active'><a href="javascript:;" ><img src="../assets/img/nav31.png"><span>机构池</span></a></router-link>
       <router-link to="/center" tag = 'li' active-class = 'active'><a href="javascript:;" ><img src="../assets/img/nav41.png"><span>个人中心</span></a></router-link>

        <!-- <li class="dq"><a href="index.html" ><img src="../assets/img/nav12.png"><span>首页</span></a></li>
        <li><a href="#"><img src="../assets/img/nav21.png"><span>超短线</span></a></li>
        <li><a href="#"><img src="../assets/img/nav31.png"><span>机构池</span></a></li>
        <li><a href="gr_center.html"><img src="../assets/img/nav41.png"><span>个人中心</span></a></li> -->
    </ul>
 </div>
</template>
<script>

// import center from './center'

export default {
  
}
</script>

<style scoped>
   /*footer*/
#foot-list{ background:#fafafa;overflow:hidden; position:fixed;bottom:0;left:0; width:100%;border-top:1px solid #ccc;z-index:6;padding-top:0.10rem;padding-bottom:0.10rem; overflow:hidden;}
#foot-list ul li{float:left; width:25%; text-align:center;}
#foot-list ul li a{color:#999;display:block;margin:0 auto;}
#foot-list ul li a img{display:block;margin:0 auto;}
#foot-list ul li a span{display:block;margin-top:0.08rem;font:0.22rem YaHei, Arial, Helvetica, sans-serif;}
#foot-list ul li:nth-child(1) a img{width:0.42rem;height:0.42rem;}
#foot-list ul li:nth-child(2) a img{width:0.46rem;height:0.42rem;}
#foot-list ul li:nth-child(3) a img{width:0.40rem;height:0.42rem;}
#foot-list ul li:nth-child(4) a img{width:0.36rem;height:0.42rem;}
#foot-list ul li.active{color:#df0716;}
</style>
