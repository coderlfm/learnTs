// 在 ES2020 中新增了可选链操作符，可以减少我们使用 if
// 使用 可选链来改写我们上一个 示例

// 可选链的语法是，如果左边不为 `null` 和 `undefined` 才会取右边的值
// info 不为空才会取 name
// info?.name

type Info = {
  name: string;
  age: number;
  like?: string;
};

let info: Info = {
  name: '小明',
  age: 18,
};

function sayLike(info: Info | undefined) {
  // console.log(info.name.);    // 严格模式下报错, 运行正常
  console.log(info?.like); // 编译正常, 运行正常
  
  // console.log(info?.like.length); // 严格模式下报错,, 运行报错，
  console.log(info?.like?.length); // 编译正常, 运行正常
}

sayLike(undefined); //运行时正常
sayLike(info); //运行时正常

export {};
