<template>
  <div id="mainBox">
    <div class="stubBox">
          <div class="stub">
            <div class="stubLeft">
                <div class="title"><img src="../assets/pic/ico_02.png"></div>
                  <h3>利好消息股票池</h3>
                  <p>热点题材 驱动事件</p>
                  <a>立即订阅<img src="../assets/img/ioc3_03.png"></a>	
              </div>
              <div class="stubRight">
                <div class="title"><img src="../assets/pic/ico_01.png"></div>
                  <h3>机构潜伏股票池</h3>
                  <p>一手信息 稳健投资</p>
                  <a>立即订阅<img src="../assets/img/ioc3_03.png"></a>	
              </div>
          </div>
      </div>
      <div class="earlyBox">
        <h3><a href="#"><img class="ioc" src="../assets/img/ioc_03.png"><code>无忧早参</code><b>2016-03-23</b><span>09:10</span><img class="ioc2" src="../assets/img/ioc2_06.png"></a></h3>
          <div class="news">
            <a href="#">
              <div class="Img"><img src="../assets/pic/news_1.jpg"></div>
                  <div class="newsR">
                    <h4>特斯拉发新车：好产品造就大牛股</h4>
                    <p>Model 3是特拉斯历史上最便宜的一款汽车，因此被外界视为让电动汽车走向主流和大规模占领市场的关键，有望成为划时代...</p>
                  </div>
              </a>
          </div>
      </div>
      <div class="earlyBox  purchase">
        <h3><a href="#"><img class="ioc" src="../assets/img/ioc3_15.png"><code>新股申购</code><img class="ioc2" src="../assets/img/ioc2_06.png"></a></h3>
          <div class="news">
            <a href="#">
              <div class="Img"><img src="../assets/pic/news2_19.jpg"></div>
                  <div class="newsR">
                      <p>今日申购的飞科电器拟登陆上交所，网上共发行1308万股，申购上限1.3万股，顶格申购需要配市值13万元。飞科电...</p>
                  </div>
              </a>
          </div>
      </div>
      <div class="earlyBox live">
        <h3><a href="#"><img class="ioc" src="../assets/img/ioc4_22.png"><code>股市直播</code><b>2016-03-23</b><img class="ioc2" src="../assets/img/ioc2_06.png"></a></h3>
          <div class="informationBox">
            <a href="javascript:void(0)">
                  <h4>2015-06-04 17:00:00</h4>
                  <div class="tit1">厄瓜多尔将加快铜矿等大型矿山建设  利空新华铜厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，...</div>
                  <div class="contentM stat">厄瓜多尔将加快铜矿等大型矿山建设厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，负责开采米拉多铜矿、FrutadelNorte金矿和RioBlanco金矿的三家外资企业将在今年投资6亿美元用于矿区建设，上述大中型矿山预计在2018年前后正式开采和生产。</div>
              </a>
              <a href="javascript:void(0)">
                  <h4>2015-06-04 17:00:00</h4>
                  <div class="tit1">厄瓜多尔将加快铜矿等大型矿山建设  利空新华铜厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，...</div>
                  <div class="contentM stat">厄瓜多尔将加快铜矿等大型矿山建设厄瓜多尔《商报》2月22日报道，今年厄政府将重点推动本国矿业发展。据官方数据，负责开采米拉多铜矿、FrutadelNorte金矿和RioBlanco金矿的三家外资企业将在今年投资6亿美元用于矿区建设，上述大中型矿山预计在2018年前后正式开采和生产。</div>
              </a>
          </div>
      </div>
  </div>
</template>
<script>
// export default {
//   props:['list','dataName']
// }
</script>

<style scoped>
#mainBox{width:100%;margin-bottom:0.96rem;}
.stubBox{width:6.90rem;margin:0 auto;}
.stubBox .stub{width:100%; overflow:hidden;margin-top:0.20rem;}
.stubBox .stub .stubLeft{width:3.34rem;height:2.2rem;float:left;background:#fff;padding-top:0.20rem;padding-bottom:0.10rem;}
.stubBox .stub .stubLeft .title,.stubBox .stub .stubRight .title{width:2.15rem;height:0.68rem;margin:0 auto;}
.stubBox .stub .stubLeft .title img,.stubBox .stub .stubRight .title img{display:block;width:2.15rem;height:0.68rem;margin:0 auto;}
.stubBox .stub .stubLeft h3,.stubBox .stub .stubRight h3 {color:#333;font:bold 0.24rem YaHei, Arial, Helvetica, sans-serif; text-align:center;margin-top:.20rem;}
.stubBox .stub .stubLeft p,.stubBox .stub .stubRight p{color:#df0716;font:0.2rem YaHei, Arial, Helvetica, sans-serif; text-align:center;margin-top:0.08rem;}
.stubBox .stub .stubLeft a,.stubBox .stub .stubRight a{display:block;width:1.80rem;height:0.48rem;margin:0.15rem auto 0; background:#df0716;color:#fefeff;font:0.22rem/0.48rem YaHei, Arial, Helvetica, sans-serif; text-align:center;}
.stubBox .stub .stubLeft a img,.stubBox .stub .stubRight a img{width:0.10rem;height:0.20rem;margin-left:0.06rem;margin-top:0.04rem;}
.stubBox .stub .stubRight{width:3.34rem;height:2.2rem;float:right;background:#fff;padding-top:0.20rem;padding-bottom:0.10rem;}

.earlyBox{width:100%;background:#fff;margin-top:0.20rem;}
.earlyBox h3{width:100%;height:0.70rem;border-bottom:solid 1px #f1f1f1;}
.earlyBox h3 a{display:block;line-height:0.7rem; overflow:hidden;}
.earlyBox h3 .ioc{ float:left;width:0.32rem;height:0.40rem;margin-top:0.15rem;margin-left:0.30rem;margin-right:0.20rem;}
.purchase h3 .ioc{width:0.37rem;height:0.30rem;margin-top:0.20rem;}
.live h3 .ioc{width:0.38rem;height:0.27rem;margin-top:0.21rem;}
.earlyBox h3 code{float:left;color:#343434;font:0.32rem/0.70rem YaHei,Arial, Helvetica, sans-serif;}
.earlyBox h3 b{float:left;color:#646464;font:0.24rem YaHei,Arial, Helvetica, sans-serif;margin-left:0.2rem;margin-top:0.23rem;}
.earlyBox h3 span{float:left;color:#646464;font:0.24rem YaHei,Arial, Helvetica, sans-serif;margin-left:0.15rem;margin-top:0.23rem;}
.earlyBox h3 .ioc2{width:0.21rem;height:0.36rem; float:right;margin-top:0.15rem;margin-right:0.30rem;}
.earlyBox .news{width:100%;padding-top:0.20rem;padding-bottom:0.20rem;}
.earlyBox .news a{display:block; overflow:hidden;}
.earlyBox .news a .Img{float:left;width:1.60rem;height:1.60rem;margin-left:0.30rem;}
.purchase .news a .Img{width:2.0rem;height:1.01rem;}
.earlyBox .news a .Img img{width:100%;}
.earlyBox .news a .newsR{width:4.88rem; float:right;margin-right:0.30rem;}
.earlyBox .news a .newsR h4{color:#323232;font:0.32rem YaHei Arial, Helvetica, sans-serif;}
.earlyBox .news a .newsR p{color:#646464;font:0.24rem/0.4rem YaHei Arial, Helvetica, sans-serif; text-indent:0.3rem;}
.purchase .news a .newsR{width:4.48rem;}
.purchase .news a .newsR p{text-indent:0rem;font:0.24rem/0.38rem YaHei Arial, Helvetica, sans-serif; text-indent:0.30rem;}
.live .informationBox{width:100%;}
.live .informationBox a{display:block;width:6.81rem;margin:0 auto;padding-top:0.30rem;padding-bottom:0.30rem;display:block;color:#646464;font:0.28rem/0.46rem YaHei Arial, Helvetica, sans-serif; border-bottom:solid 1px #f1f1f1;}
.live .informationBox a .contentM{display:none;}
.live .informationBox a h4{color:#df0716;}
.live .news_list a span{color:#df0716;}
.live .more{width:100%; text-align:center; padding-bottom:0.30rem;padding-top:0.20rem;}
.live .more a{display:block;color:#999;font:0.28rem/0.46rem YaHei Arial, Helvetica, sans-serif;}

</style>
