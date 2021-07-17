// as 关键字
// as 关键字可以让我们将一种类型转换成一个更具体的类型或者 更不具体的类型(any)

// 示例1

// const img = document.getElementById('img')

// img.src = 'https://www.typescriptlang.org/favicon-32x32.png'
// 报错，因为默认取到的是 HTMLElement，该类型中没有 src属性，
// 此时就可以使用 as 明确的告诉 ts 我们取到是什么类型

const img = document.getElementById('img') as HTMLImageElement;

img.src = 'https://www.typescriptlang.org/favicon-32x32.png';

// 示例 2

class Person {}

class Man extends Person {
  sayHello() {
    console.log("Hello, I'm a man");
  }
}

// Man 中才有 sayHello 方法，如果不告诉 ts 我们这个参数具体类型直接调用则会报错，且没有语法提示
function sayHello(person: Person) {
  (person as Man).sayHello();
}
