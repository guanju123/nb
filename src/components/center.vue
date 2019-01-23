<template>
    <div id="user-b">
		<!--html5 nav-->
		
		<section class="m-component-user" id="m-user">
	        <div class="m-user-avatar text-center">
	            <span class="avatarPic"><img style="display: inline;" class="lazy img-circle" src="../assets/images/bb.jpg"></span>
	            <div class="user_btn">
                    <router-link to="/login"><a href="login.html" class="this">登录</a></router-link>
	            	<router-link to="/user"><a href="register.html">注册</a></router-link>
	            	
	            </div>
	        </div>
	        
	        <div class="yd_por">
                <h3><img src="../assets/img/btn_01.jpg">已订阅产品</h3>
                <ul>
                    <li><a href="subscribe.html"><span>机构池</span><b>剩余226天</b><code>2016-11-06</code><img src="../assets/img/gr_03.png"></a></li>
                    <li><a href="subscribe2.html"><span>超短线</span><b>剩余226天</b><code>2016-11-06</code><img src="../assets/img/gr_03.png"></a></li>
                </ul>
            </div>
	        <div class="order"><a href="my_order.html"><img class="tb" src="../assets/img/btn_02.jpg"><span>我的订单</span><img class="jt" src="../assets/img/gr_03.png"></a></div>
            <div class="order"><a href="qt_por.html"><img class="tb" src="../assets/img/btn_03.jpg"><span>订阅其他产品</span><img class="jt" src="../assets/img/gr_03.png"></a></div>
            <div class="order"><a id="xy" href="javascript:void(0)"><img class="tb" src="../assets/img/btn_04.jpg"><span>注册协议书</span><img class="jt" src="../assets/img/gr_03.png"></a></div>
            <div class="gr_banner">
                <a><img src="../assets/pic/banner_14.jpg" width="100%"></a>
                <p>监督电话：0731-88211111</p>
            </div>            
	    </section>
    </div>
</template>




<style scoped>
.user_btn {
  height: 35px;
  width: 160px;
  margin: 15px auto 5px;
}
.user_btn a {
  display: inline-block;
  float: left;
  text-align: center;
  width: 80px;
  color: #2ad2c9;
  position: inherit;
  background: #fff;
  height: 35px;
  line-height: 35px;
  border-radius: 0 5px 5px 0;
}
.user_btn a.this {
  background: #2ad2c9;
  color: #fff;
  border-radius: 5px 0 0 5px;
}
#user-b .j-nav .shopping-cart a{ background-position: -32px -225px;}
.m-component-user { background-color: #F1F1F1; margin-bottom: 64px;}
.m-user-avatar {
    padding: 15px 0px;
    color: #323232;
}
     .header{width:100%;margin:0.20rem 0;background:#fff;padding-top:0.2rem;padding-bottom:0.2rem; overflow:hidden;}
.header div{float:left;width:0.90rem;height:0.90rem; border-radius:0.45rem; overflow:hidden;margin-left:0.34rem;}
.header div img{display:block;width:100%;}
.header p{float:left;margin-left:0.24rem;color:#343434;font:0.28rem/0.45rem Yahei, Arial, Helvetica, sans-serif;margin-top:0.10rem;}
.header p span{display:block;color:#646464;font:0.24rem Yahei, Arial, Helvetica, sans-serif;}
.header a{display:block;float:right;color:#bc8a43;font:0.24rem Yahei, Arial, Helvetica, sans-serif;margin-top:0.33rem;margin-right:0.30rem;}
.header a span{text-decoration:underline;}
.header a img{margin-left:0.10rem;width:0.14rem;height:0.22rem;}
.yd_por{width:100%;background:#fff;}
.yd_por h3{color:#343434;height:0.86rem;border-bottom:solid 1px #f1f1f1;font:0.28rem/0.86rem yaHei, Arial, Helvetica, sans-serif;}
.yd_por h3 img{width:0.40rem;height:0.40rem;margin-left:0.30rem;margin-right:0.20rem; vertical-align:middle;}
.yd_por ul{width:6.60rem;margin:0 auto;}
.yd_por ul li{width:100%; border-bottom:solid 1px #f1f1f1;padding-top:0.27rem;padding-bottom:0.27rem;}
.yd_por ul li:last-child{border-bottom:0 none;}
.yd_por ul li a{display:block;font:0.26rem YaHei, Arial, Helvetica, sans-serif; overflow:hidden;}
.yd_por ul li a span{float:left;width:1.76rem;color:#323232;margin-top:0.02rem;text-indent:0.56rem;margin-right:0.4rem;}
.yd_por ul li a b{float:left;width:2.20rem;color:#e42e2e;margin-top:0.02rem;}
.yd_por ul li a code{float:left;width:1.50rem;color:#646464;font:0.24rem YaHei, Arial, Helvetica, sans-serif;margin-top:0.03rem;}
.yd_por ul li a img{width:0.16rem;height:0.30rem;float:right;}
.order{width:100%;background:#fff;padding-top:0.23rem;padding-bottom:0.23rem;margin-top:0.20rem; overflow:hidden;}
.order .tb{width:0.41rem;height:0.40rem;margin-left:0.30rem; float:left;margin-right:0.16rem;}
.order span{float:left;color:#343434;font:0.28rem YaHei, Arial, Helvetica, sans-serif;margin-top:0.02rem;}
.order .jt{ float:right;width:0.16rem;height:0.30rem;margin-right:0.30rem;margin-top:0.05rem;}
.gr_banner{width:100%;margin-top:0.20rem;margin-bottom:1.16rem;}
.gr_banner a{display:block;width:6.60rem;margin:0 auto;}
.gr_banner p{color:#999;font:0.24rem YaHei, Arial, Helvetica, sans-serif; text-align:center;} 
</style>

