<template>
  <div style="padding-top:44px">
    <van-nav-bar
      title="免税政策"
      left-text="返回"
      left-arrow
      @click-left="go"
      style="position: fixed; top:0; width:100%;"
    ></van-nav-bar>
    <div style="padding:0px 10px">
      <div
        class="padding ui-article-content rio ng-binding"
       
        style="display: block; padding:0xp 10px;"
      >
        <p style="text-align: center;">
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 14px;"
              >海南离岛免税政策内容介绍</span
            >
          </strong>
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >一、年龄</span
            >
          </strong>
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >年满16周岁，乘飞机、火车或轮船离开海南本岛但不离境的国内旅客。</span
          >
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >二、购物次数</span
            >
          </strong>
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >离岛旅客不限购物次数。</span
          >
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >三、限购额度</span
            >
          </strong>
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >每个公历年内，单价人民币8000元以下商品，每年累计购物金额不超过人民币30000元（含30000元），此外，单价人民币8000元以上商品，每年限购2件，每人每次限购1件，并在扣减未使用的免税额后缴纳进境物品进口税（行邮税），最高扣减免税额度为8000元。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >（PS.同一旅客在同一年度内乘飞机、乘火车和乘轮船免税购物金额合计计算，且不得超过离岛免税政策的额度限制规定。）</span
          >
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >四、限购数量</span
            >
          </strong>
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >12件之内：化妆品、糖果；</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >8件之内：香水、保健食品（且合计不超过3千克）、蜂王浆制剂（且合计不超过1千克）、尿不湿、家用小五金；</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >6件之内：首饰、手表、笔、服装服饰、小皮件、体育用品、玩具（含童车）、咖啡（且合计重量不超过3千克）、参制品（且合计重量不超过3千克）、谷物食品（且合计重量不超过6千克）、橄榄油（且合计重量不超过5千克）；</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >4件之内：工艺品、眼镜（含太阳镜）、丝巾、领带、毛织品、棉织品、鞋帽、皮带、箱包、美容及保健器材、餐具及厨房用品、婴儿配方奶粉及辅食（且合计重量不超过5千克）、陶瓷制品、玻璃制品、钟、转换插头、表带、表链、眼镜片、眼镜框、一类和二类家用医疗器械。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >2件之内：家用空气净化器（配件6件）、一类和二类家用医疗器械二</span
          >
          <br />
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
          >
            （品类认定以海南免税店经海关批准的品类认定为准）
            <br />
            <br />
          </span>
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >政策解读</span
            >
          </strong>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
          >
            <br />
          </span>
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >例1：</span
            >
          </strong>
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >当年首次购买：先购买的商品全部是单价在8000元以内的免税商品，30000元限额并未使用完毕，且可选择购买单价8000元以上的单品一件。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >举例：</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >香水+包=5000元，若再购买单价8000元以上单品，如：手表=9000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >行邮税：（9000-8000）X25%=250元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >剩余免税额度：30000-5000-8000=17000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >当年第二次购买：基于第一次购买30000元限额并未使用完毕，可选购小于等于剩余免税额度的单价在8000元以内的免税商品，且还可选择购买单价8000元以上的单品一件。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >举例：</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >香水+包=5000元＜剩余免税额，若再购买单价8000元以上单品，如：手表=9000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >行邮税：（9000-8000）X25%=250元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >剩余免税额度：17000-5000-8000=4000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >当年第三次购买：基于前两次购买30000元限额并未使用完毕，可选购小于等于剩余免税额度的单价在8000元以内的免税商品，但不能购买单价8000元以上的单品。</span
          >
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >例2：</span
            >
          </strong>
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >当年首次购买：先购买的商品全部是单价在8000元以内的免税商品，并且30000元限额已经使用完毕，顾客还可购买单价8000元以上的单品一件。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >举例：</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >香水+包=30000元，若购买单价8000元以上单品，如：手表=9000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >行邮税： 9000X25%=2250元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >当年第二次购买：基于第一次购买30000元限额已经使用完毕，此时不可购买单价8000元以内的商品，但还可选择购买单价8000元以上的单品一件。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >举例：</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >若购买单价8000元以上单品，如：手表=9000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >行邮税： 9000X25%=2250元</span
          >
        </p>
        <p>
          <strong>
            <span
              style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
              >例3：</span
            >
          </strong>
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >当年首次购买：先购买的商品全部是单价在8000元以内的免税商品，30000元限额并未使用完毕，且可选择购买单价8000元以上的单品一件。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >举例：</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >香水+包=5000元，若再购买单价8000元以上单品，如：手表=9000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >行邮税：（9000-8000）X25%=250元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >剩余免税额度：30000-5000-8000=17000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >当年第二次购买：基于第一次购买30000元限额并未使用完毕，可选购小于等于剩余免税额度的单价在8000元以内的免税商品，且还可选择购买单价8000元以上的单品一件。</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >举例：</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >香水+包=15000元＜剩余免税额，若再购买单价8000元以上单品，如：手表=9000元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >行邮税：【9000-（17000-15000）】X25%=1750元</span
          >
        </p>
        <p>
          <span
            style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 12px;"
            >剩余免税额度：0元</span
          >
        </p>
        <p class="p" style="margin: 0pt; text-indent: 0pt;">
          <span
            style="font-family: 微软雅黑; letter-spacing: 0pt; font-size: 12px;"
          >
            <!-- <o:p></o:p> -->
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped></style>
