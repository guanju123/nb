<template>
  <div>
    <router-view></router-view>
    <!-- <home></home> -->
    <!-- <center></center> -->
    <footbar></footbar>
  </div>
</template>
<script>
// import home from './components/home'
import footbar from './components/footbar'
// import detail from './components/detail'
// import center from './components/center'

export default {
  components:{footbar}
}
</script>