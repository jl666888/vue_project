<template>
  <div>
    <div class="cnt">
      <div class="cnt_1">
        <p>
          用户名称：
          <span>{{ user_name || "无" }}</span>
        </p>
        <p>
          用户手机：
          <span>{{ user_phone || "无" }}</span>
        </p>
      </div>
      <div class="cnt_2">
        <div>
          <img :src="dataList.img" width="130" height="80" />
        </div>
        <div>
          <p>{{ dataList.name }}</p>
          <p style="color: red">
            ￥{{ dataList.price }}/{{ dataList.comment_num }}课时
          </p>
        </div>
      </div>
      <div class="cnt123" style="margin-top: 5px; color: gray-6">
        <van-nav-bar
          left-text="选择学员"
          :right-text="'已选择' + length + '人'"
          border
          @click-right="onClickRight"
        />
      </div>
      <div style="margin-top: 5px">
        <van-nav-bar
          left-text="选择教师"
          :right-text="
            !this.$store.state.teach.city
              ? 'XXX'
              : this.$store.state.teach.city +
                  ' ' +
                  this.$store.state.teach.name || 'XXX'
          "
          border
          @click-right="onClickRight1"
        />
      </div>
      <div style="margin-top: 5px">
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
        />
        <van-popup
          :value="coupons[0].valueDesc"
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
      </div>
      <van-divider />
    </div>
    <div class="foo">
      <van-swipe-cell>
        <van-cell title="价格" :value="'￥' + dataList.price" />
        <van-cell title="学员数量" :value="length" />
        <van-cell title="优惠券" :value="youVal / 100" />

        <van-cell
          title="实付"
          :value="'￥' + (dataList.price * length - youVal / 100)"
        />
      </van-swipe-cell>
    </div>
    <Submit></Submit>
  </div>
</template>
<script>
import Submit from "@/components/Buy/Submit";
import Vue from "vue";
import {
  NavBar,
  Toast,
  CouponCell,
  CouponList,
  Divider,
  SwipeCell,
  Cell,
  Icon,
} from "vant";
Vue.use(Icon);
Vue.use(SwipeCell);
Vue.use(Divider);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(Toast);
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠100元",
  reason: "",
  value: 20000,
  name: "优惠券",
  startAt: 1489104000,
  endAt: 1614592000,
  valueDesc: "200",
  unitDesc: "元",
};
let List = JSON.parse(localStorage.getItem("BuyData"));
export default {
  components: {
    Submit,
  },
  data() {
    return {
      show: false,
      dataList: {},
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      coupons1: ["选择学员"],
      youVal: 0,
      user_name: "",
      user_phone: "",
      length: 0,
    };
  },
  created() {
    this.$http.post("/api/getUser").then((ret) => {
      if (ret.error == 0) {
        this.$store.commit("setUsers", ret.data);
        let users = JSON.parse(window.localStorage.getItem("users"));
        if (users) {
          this.user_name = users.username;
          this.user_phone = users.phone;
        }
      }
    });

    this.length = JSON.parse(localStorage.getItem("StuRes"))
      ? JSON.parse(localStorage.getItem("StuRes")).length
      : 0;
    this.dataList = this.$store.state.buyData;

    localStorage.setItem("BuyData", JSON.stringify(this.dataList));
    this.$store.commit("setShow", false);

    if (!this.dataList) {
      this.dataList = List;
    }
  },
  methods: {
    Teacher: function () {
      this.$router.push("/buy/teacher");
    },
    onChange(index) {
      if (index >= 0) {
        this.youVal = this.coupons[index].value;
      } else {
        this.youVal = 0;
      }
      this.showList = false;
      this.chosenCoupon = index;
    },
    onClickRight() {
      this.$store.commit("setSuc", this.dataList);
      if (this.$route.query.zx) {
        this.$router.push({ path: "/buy/stu", query: { zx: 1 } });
      }else if(this.$route.query.ok && this.$route.query.xf){
        this.$router.push({path:'/buy/stu',query:{ok:this.$route.query.ok,xf:this.$route.query.xf}})
      }
       else if (this.$route.query.xf) {
        this.$router.push({ path: "/buy/stu", query: { xf: 1 } });
      }else if(this.$route.query.ok){
        this.$router.push({path:'/buy/stu',query:{ok:this.$route.query.ok}})
      } else {
        this.$router.push({ path: "/buy/stu" });
      }
    },
    onClickRight1() {
      if (this.$route.query.zx) {
        this.$router.push({ path: "/buy/teacher", query: { zx: 1 } });
      }else if(this.$route.query.ok && this.$route.query.xf){
        this.$router.push({path:'/buy/teacher',query:{ok:this.$route.query.ok,xf:this.$route.query.xf}})
      } 
      else if (this.$route.query.xf) {
        this.$router.push({ path: "/buy/teacher", query: { xf: 1 } });
      }else if(this.$route.query.ok){
        this.$router.push({path:'/buy/teacher',query:{ok:this.$route.query.ok}})
      } 
      else {
        this.$router.push({ path: "/buy/teacher" });
      }
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
};
</script>
<style lang="scss" scoped>
.cnt_1 {
  width: 95%;
  height: 60px;
  margin: 10px auto;
  background: rgba(247, 244, 244, 0.3);
  // box-shadow: 5 5 4px #000;
  font-size: 13px;
  box-sizing: border-box;
  padding-left: 10px;
  line-height: 18px;
}
.cnt_2 {
  width: 95%;
  height: 130px;
  background: rgb(255, 255, 200);
  margin: 0 auto;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  div:first-child {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-self: space-between;
    width: 150px;
    height: 130px;
  }
  div:nth-child(2) {
    margin: 12px 8px 10px;
  }
}
.foo {
  margin-bottom: 50px;
}
</style>