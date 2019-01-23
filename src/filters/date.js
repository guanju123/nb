import {fillzero} from './fillzero'
export const date = (time)=>{
    var d=new Date();
    d.setTime(time);
    let year = d.getFullYear();
    return '时间'
  }