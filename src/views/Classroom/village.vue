<template>
  <div>
    <h3>请选择查看的校区</h3>

    <van-button class="button" v-for="(val,key) in arr" @click="fun(val)" type="default" v-show="val.name !== ''" style="margin:10px">{{val.name}}</van-button>
    <van-button class="button" @click="fun2" type="default"  style="margin:10px;">无</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
  data:function(){
    return {
      arr:[]
    }
  },
  created(){
    this.$http.get('http://127.0.0.1/BK_2003/getLocation.php').then(ret=>{
      ret.forEach((v,k)=>{
        if( k < 10 ){
            this.arr.push(v)
        }
      })
    
    })
  },
  methods:{
    fun:function(val){
      // console.log(val)
      this.$router.push({path:'/',query:{location:val.name}})
    },
    fun2:function(){
      this.$router.push({path:'/',query:{location:''}})
    }
  }
}
</script>

<style scoped>
.button{
  box-shadow:0 0 10px 6px #f4f4f4;
}
</style>