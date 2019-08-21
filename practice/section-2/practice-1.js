'use strict';

function countSameElements(collection) {
  // var obj = {};
  // var key = [];
  // var result = [];
  
  // for (var i = 0; i < collection.length; i++) {  //遍历位置索引
  //   key = collection[i];        //把元素赋值
  //   if (obj[key]){
  //     obj[key]++;
  //   } 
  //   else{
  //     obj[key] = 1;
  //   }
  // }
  
  // for (var i of collection) {   //直接遍历元素
  //   if (obj[i]) {    //取值，如果有值的话+1
  //     obj[i]++;
  //   }
  //   else {         //没值的话格式化=1
  //     obj[i] = 1;
  //   }
  // }
  // for (var i in obj) {
  //   result.push({ key: i,count: obj[i]});
  // }
  // return result;

//Map方法
  var result = [];
  var map = new Map();
  for (var i = 0; i < collection.length; i++) {
    if (map.get(collection[i])==null){
      map.set(collection[i], 1)
    }
    else {
      map.set(collection[i], map.get(collection[i]) + 1)
    }
  }
  map.forEach(function (value, key) {
    result.push({key:key, count: value})
  })
  return result;
}
