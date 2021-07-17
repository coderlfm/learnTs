// this 的默认推导

type Info = {
  name: string;
  age: number;
  sayName: () => void;
};

let info: Info = {
  name: '小明',
  age: 18,
  sayName() {
    console.log(this.name);
  },
};

info.sayName();

// this 的不明确类型
// 在 TypeScript 严格模式中，必须显示的指定 this

function sayName(this: Info, msg: string) {
  // 显示的指定 this，且不会占用第一个参数的位置
  console.log(this.name, msg); // 如果没有指定this则报错
}

sayName.call(info, 'hello'); // 绑定 this

export {};
