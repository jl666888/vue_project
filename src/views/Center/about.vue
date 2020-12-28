<template>
  <div class="yemian">
    <van-nav-bar
      title="关于我们"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="pir">
      <img
        src="http://img.mukewang.com/szimg/5fdb394608def73a00000000-358-201.jpg"
        alt=""
      />
    </div>
    <div class="yemian">
      <h3>关于我们</h3>
      <p>致力于打造全国最专业的教育机构</p>
      <p>
        自2012年8月成立以来，备受孩子和家长的青睐，经过长达5年的努力，我们为福建省不同年龄段的孩子创造先进创新的教育体系。全省丰富的教育行业经验和优质的产品资源。教师风趣幽默，有意营造学习氛围，旨在为3-18岁的孩子提供更轻松·更高效·更快乐的学习。在全浸入式学习环境中，激发孩子的学习兴趣，使孩子学习起来游刃有余。
        耐寒教育的愿景是在个性化教育理念的指导下，通过持续的创新和整合，让每个需要成长机会的人都能获得更优质的教育资源和服务。使教育从艺术走向科学，整合社会更高品质、更具效率、更先进的教育资源，配置个性化的学习帮助计划和更适合学员的教学方案，最大程度地释放每个学员的潜能，让每个需要成长机会的人都能获得更优质的教育。
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    this.$store.commit("setShow", false);
  },
  beforeDestroy() {
    this.$store.commit("setShow", true);
  },
};
</script>
<style lang="scss" scoped>
.yemian {
  text-align: center;
  padding: 0 46px;
}
.yemian p:nth-child(3) {
  text-indent: 2em;
}
.pir {
  height: 250px;
  width: 380px;
  margin: 0;
  text-align: center;
}
</style>