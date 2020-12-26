<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/Buy/header.vue";
export default {
  components: {
    Header,
  },
};
</script>