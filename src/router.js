import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

import home from './components/home';
import detail from './components/detail';
import login from './components/login';
import center from './components/center';
import user from './components/user';
import jigou from './components/jigou';
import duanxian from './components/duanxian';
import follow from './components/follow';


import error from './components/error';

const routes = [
  {path:'/home',component:home},
  {path:'/detail',component:detail},
  {path:'/login',component:login},
  {path:'/center',component:center},
  {path:'/user',component:user},
  {path:'/duanxian',component:duanxian},
  {path:'/follow',component:follow},

  {path:'/jigou',component:jigou},
  {path:'/',redirect:'/home'},
  // {path:'*',component:error}

];

export default new Router({
  routes
})
