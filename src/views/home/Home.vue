<template>
  <div id="home">
    <search />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index"
        ><img v-lazy="image"
      /></van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3" :gutter="5">
      <van-grid-item
        v-for="item in goodsList"
        :key="item.id"
        icon="photo-o"
        text="文字"
        :style="{ height: '180px' }"
      >
        <div class="image">
          <img :src="item.img" alt="" />
        </div>
        <div class="title">
          <span>{{ item.title }}</span>
        </div>
        <div class="price">
          <span>￥{{ item.price }}.00</span>
        </div>
      </van-grid-item>
    </van-grid>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :style="{ marginTop: '10px' }"
    >
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item
          v-for="item in list"
          :key="item"
          :title="item"
          icon="photo-o"
          text="文字"
          class="item"
        />
      </van-grid>
    </van-list>
  </div>
</template>

<script>
import Search from "./child/Search";

export default {
  name: "Home",
  components: {
    Search,
  },
  data() {
    return {
      images: [
        "https://img13.360buyimg.com/cms/jfs/t1/162419/29/13014/401225/6050c7abE159b80a5/2b0f0bb8db7f76f4.jpg!q70.dpg.webp",
        "https://img12.360buyimg.com/cms/jfs/t1/159530/21/9131/435657/603c8c85E1a0d83cf/829584a58f82c994.png.webp",
        "https://img14.360buyimg.com/cms/jfs/t1/171294/10/13160/483457/6050c799Eb9a041cc/5b180e9f3f1ec4fa.png.webp",
        "https://img13.360buyimg.com/cms/jfs/t1/161162/14/8007/139975/60379d47Ea5facca8/ed00b8e1e13fc419.png.webp",
        "https://img30.360buyimg.com/cms/jfs/t1/159361/34/12685/428650/6050c799E49753b3d/d666d20f9ae91a54.png.webp",
        "https://img10.360buyimg.com/cms/jfs/t1/162505/31/10328/376726/6045c79dEd223153b/69990c8f14849aa7.jpg!q70.dpg.webp",
      ],
      list: [],
      loading: false,
      finished: false,
      activeName: "a",
      goodsList: [
        {
          id: 1,
          title:
            "Apple iPhone 12 Pro (A2408) 128GB 海蓝色 支持移动联通电信5G 双卡双待手机",
          img:
            "https://m.360buyimg.com/mobilecms/jfs/t1/147790/16/10802/46574/5f861601E0f11ea02/8cd0971d28ce76d6.jpg!q70.dpg.webp",
          price: 8499,
        },
        {
          id: 2,
          title:
            "Apple iPhone 12 (A2404) 64GB 蓝色 支持移动联通电信5G 双卡双待手机",
          img:
            "https://m.360buyimg.com/mobilecms/jfs/t1/150766/13/2916/69414/5f8617f4E8fdbbeb0/73cf827a1ce10859.jpg!q70.dpg.webp",
          price: 6299,
        },
        {
          id: 3,
          title:
            "Apple iPhone 12 Pro Max (A2412) 128GB 金色 支持移动联通电信5G 双卡双待手机",
          img:
            "https://m.360buyimg.com/mobilecms/jfs/t1/130023/13/12256/67179/5f8611b5E0f7a0734/23bb6303ba8bc3ce.jpg!q70.dpg.webp",
          price: 9299,
        },
        {
          id: 4,
          title:
            "Apple iPhone 12 mini (A2400) 64GB 黑色 手机 支持移动联通电信5G",
          img:
            "https://m.360buyimg.com/mobilecms/jfs/t1/131379/2/12031/57587/5f861487Ef1853841/e6c43138cf362da9.jpg!q70.dpg.webp",
          price: 5499,
        },
        {
          id: 5,
          title:
            "Apple iPhone 11 (A2223) 64GB 黑色 移动联通电信4G手机 双卡双待",
          img:
            "https://m.360buyimg.com/mobilecms/jfs/t1/152907/32/9804/49767/5fd4d57aE8734c745/8f8a9e98bc24bc72.jpg!q70.dpg.webp",
          price: 4499,
        },
        {
          id: 6,
          title: "Apple iPhone SE (A2298) 64GB 白色 移动联通电信4G手机",
          img:
            "https://m.360buyimg.com/mobilecms/jfs/t1/106471/6/18700/159677/5e97393cE2d418cc7/3ae010aa64cc187e.jpg!q70.dpg.webp",
          price: 3299,
        },
      ],
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less">
#home {
  height: auto;
  background-color: #efefef;
}
.my-swipe {
  height: 410px;
  margin-bottom: 20px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
}
.van-list {
  height: 100vh;
  overflow: auto;
}
.van-grid-item__content {
  padding: 0 10px !important;
}
.item {
  height: 150px;
}
.image {
  width: 100%;
  height: 110px;
}
.public {
  width: 100%;
  height: 30px;
  font-size: 12px;
}
.title {
  .public;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.price {
  .public;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  color: rgb(240, 37, 15);
}
</style>


