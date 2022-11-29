export {}

function foo<T extends Record<string,any>>(t: T):T{
  return {
    ...t
  }
}
const res = foo<Number>(new Number(1));


// interface User {
//   name: string
// }



console.log(res);



type A = number & boolean; 


// const data = {
//   detail:null,
//   list: {
//     home: null
//   }
// }

// // const newA = new Proxy(a, {
// //   get: (target, key) => {
// //     console.log(target,key);
// //     return a[key]
// //   }
// // })

// // 代理成响应式数据
// const newData = new Proxy(data, {
//   get(target, key) {
//     // 当获取对象属性的时候，把当前正在获取属性的方法 记录起来
//     return target[key];
//   },
//   // set(target, key, newValue) {
//   //   target[key] = newValue;
//   //   // 当对象的值发生更改的时候，把之前记录的副作用函数都执行一遍
//   // },
// });

// console.log(newData);
