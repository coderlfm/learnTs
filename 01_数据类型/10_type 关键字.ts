let info: {
  name: string;
  age: number;
  like: string;
} = {
  name: '小明',
  age: 18,
  like: 'rap',
};

function sayName(info: { name: string; age: number; like: string }) {
  console.log('My name is ', info.name);
}

/*  
 当我们在多个地方需要用到同一类型时，重复编写类型注解就会显得很冗余，
 `TypeScript` 中有一个 `type` 关键字 可以来帮助我们来给这些类型起别名
 `Dart` 中也有类似的的语法，叫做 `typedef `
 当我们使用 `type` 关键字来帮助我们给类型起别名后，我们的代码可以改写成以下方式
 非常的清晰明了
 `type` 关键字只是起别名，没有其它特殊作用
*/

type Info = {
  name: string;
  age: number;
  like: string;
};

let info2: Info = {
  name: '小明',
  age: 18,
  like: 'rap',
};

function sayName2(info: Info) {
  console.log('My name is ', info.name);
}
