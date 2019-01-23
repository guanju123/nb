
<template>
    <div>
        <div class="dx_details">
            <h3><span>今日选股</span><code>04-08  14:09</code></h3>
            <div class="xg"><a>银华日利<span>511880</span></a><a>银华日利<span>511880</span></a></div>
        </div>
        <div class="dx_sj">
            <h3>驱动事件</h3>
            <p>液态金属业务开始贡献营收。公司作为国内较早进行液态金属研发的企业，已掌握液态金属产品在材料、工艺、设备等方面的核心技术，是行业内极少数实现
        液态金属精密结构件在消费电子领域商用的供应商之一。公司液态金属在小件领域已经有应用。</p>
        </div>
        <div class="dx_zs">
            <h3>分析师情绪指标</h3>
            <div class="zs_nav">
                <ul>
                    <li class="on"><img src="../assets/img/js_01.png"><code></code></li>
                    <li><img src="../assets/img/js_02.png"><code></code></li>
                    <li><img src="../assets/img/js_03.png"><code></code></li>
                </ul>
                <div class="border"></div>
            </div>
            <div class="zs_list">
                <ul>
                    <li>
                        <a>谨慎</a>
                        <p>预计市场处于弱势状态或即将转入弱势，风险指数强，谨慎投资。</p>
                    </li>
                    <li>
                        <a>适中</a>
                        <p>预计市场处于弱势状态或即将转入弱势，风险指数强，谨慎投资。</p>
                    </li>
                    <li>
                        <a>乐观</a>
                        <p>预计市场处于弱势状态或即将转入弱势，风险指数强，谨慎投资。</p>
                    </li>
                </ul>
                <div class="page"><a>下一篇&gt;</a></div>
            </div>
        </div>

        <footbar></footbar>
    </div>
</template>

<script>
import footbar from './footbar'
export default {
    components:{footbar}
}
</script>

<style>
      .dx_details{width:100%;background:#fff;padding-bottom:0.20rem;}
    .dx_details h3{border-bottom:solid 1px #edf0f5; overflow:hidden;}
    .dx_details h3 span{color:#343434;font:0.28rem/0.66rem YaHei, Arial, Helvetica, sans-serif;margin-left:0.30rem;float:left;}
    .dx_details h3 code{ float:right;color:#999;font:0.28rem/0.66rem YaHei,Arial, Helvetica, sans-serif;margin-right:0.30rem;}
    .dx_details .xg{width:6.02rem;margin: 0 auto; overflow:hidden;padding-top:0.20rem;}
    .dx_details .xg a{display:block;background:#df0716;width:2.80rem;height:0.96rem; float:left;color:#fff;font:0.32rem YaHei, Arial, Helvetica, sans-serif;text-align:center;padding-top:0.26rem;}
    .dx_details .xg a span{display:block;margin-top:0.05rem;}
    .dx_details .xg a:nth-child(2){float:right;}
    .dx_sj,.dx_zs{width:100%;margin-top:0.20rem;background:#fff;}
    .dx_sj h3,.dx_zs h3{width:100%;border-bottom:solid 1px #edf0f5;color:#343434;font:0.28rem/0.66rem YaHei, Arial, Helvetica, sans-serif; text-indent:0.30rem;}
    .dx_sj p{color:#646464;font:0.28rem/0.44rem Arial, Helvetica, sans-serif;width:6.60rem;margin:0 auto; text-indent:0.30rem;padding-top:0.20rem;padding-bottom:0.2rem;}
    .dx_zs .zs_nav{width:5.26rem;margin:0 auto; position:relative;height:2.0rem;}
    .dx_zs .zs_nav ul{width:100%; overflow:hidden; position:absolute;bottom:0;left:0;z-index:3;}
    .dx_zs .zs_nav ul li{float:left;margin-left:0.47rem;height:1.70rem;width:0.87rem; position:relative;}
    .dx_zs .zs_nav ul li img{display:none;width:0.87rem;height:1.26rem;}
    .dx_zs .zs_nav ul li code{display:block;width:0.30rem;height:0.30rem; border-radius:0.15rem; position:absolute;bottom:0.05rem;left:50%;margin-left:-0.15rem;}
    .dx_zs .zs_nav ul li:nth-child(1) code{background:#1ec807;}
    .dx_zs .zs_nav ul li:nth-child(2) code{background:#ff7800;}
    .dx_zs .zs_nav ul li:nth-child(2){margin-left:0.87rem;margin-right:0.4rem;}
    .dx_zs .zs_nav ul li:nth-child(3) code{background:#ff0000;}
    .dx_zs .zs_nav .border{width:5.26rem;background:#ccc;height:0.14rem; border-radius:0.07rem; position:absolute;bottom:0.23rem;left:0;z-index:2;}
    .dx_zs .zs_nav ul li.on{height:1.80rem;}
    .dx_zs .zs_nav ul li.on img{display:block;}
    .dx_zs .zs_nav ul li.on code{width:0.40rem;height:0.40rem;border-radius:0.20rem;margin-left:-0.2rem;bottom:0.1rem;}
    .zs_list{width:100%;padding-bottom:1.3rem;}
    .zs_list ul{width:100%;}
    .zs_list ul li{width:100%; overflow:hidden;width:6.42rem;margin:0.60rem auto 0;}
    .zs_list ul li a{float:left;width:0.80rem;height:0.80rem;text-align:center;font:0.28rem/0.80rem YaHei, Arial, Helvetica, sans-serif;color:#fff; border-radius:0.40rem;}
    .zs_list ul li:nth-child(1) a{background:#1ec807;}
    .zs_list ul li:nth-child(2) a{background:#ff7800;}
    .zs_list ul li:nth-child(3) a{background:#ff0000;}
    .zs_list ul li p{float:right;width:5.38rem;color:#343434;font:0.28rem/0.44rem YaHei,Arial, Helvetica, sans-serif;}
    .zs_list .page{width:6.60rem;margin:0 auto;font:0.28rem YaHei, Arial, Helvetica, sans-serif; text-align:right;margin-top:0.2rem;}
    .zs_list .page a{color:#999;}
</style>
