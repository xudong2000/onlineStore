<template>
  <div id="category">
    <van-tree-select
      height="92vh"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <div v-if="active === 0" class="iPhone">
          <van-grid :column-num="3" :gutter="5">
            <van-grid-item
              v-for="item in iPhoneList"
              :key="item.id"
              icon="photo-o"
              text="文字"
              :style="{ height: '120px', border: 'none' }"
            >
              <div class="phoneImg">
                <img :src="item.img" alt="" />
              </div>

              <div class="phoneName">
                <span>{{ item.name }}</span>
              </div>
            </van-grid-item>
          </van-grid>
        </div>
        <van-image
          v-if="active === 1"
          src="https://img01.yzcdn.cn/vant/apple-2.jpg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      active: 0,
      items: [
        { text: "iPhone" },
        { text: "iPad" },
        { text: "Mac" },
        { text: "Watch" },
        { text: "AirPods" },
      ],
      iPhoneList: [
        {
          id: 1,
          name: "iPhone 12 系列",
          img:
            "https://img10.360buyimg.com/cms/jfs/t1/163943/31/8688/157404/603f35ddEfd0dc30a/2456bc15a5a6600d.jpg!q70.dpg.webp",
        },
        {
          id: 2,
          name: "iPhone 11 系列",
          img:
            "https://img13.360buyimg.com/cms/jfs/t1/157802/40/9622/128689/603f35e2Eeab7764b/77b51a209114e4f5.jpg!q70.dpg.webp",
        },
        {
          id: 3,
          name: "iPhone SE",
          img:
            "https://img10.360buyimg.com/cms/jfs/t1/162365/34/9006/174272/603f35e7E4a9ab5a7/a352e22b4a5b7719.jpg!q70.dpg.webp",
        },
        {
          id: 4,
          name: "iPhone XR",
          img:
            "https://img14.360buyimg.com/cms/jfs/t1/156727/9/12249/145666/603f35ecE817e4eec/2e0dd5d5b0e6c575.jpg!q70.dpg.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
#category {
  height: 100%;
}
.van-tree-select__content {
  flex: 3;
  padding: 5px;
}
.iPhone {
  width: 100%;
  height: 100%;
}
.phoneImg {
  width: 100%;
  height: 80px;
}
.phoneName {
  width: 100%;
  height: 30px;
  font-size: 12px;
  text-align: center;
}
</style>