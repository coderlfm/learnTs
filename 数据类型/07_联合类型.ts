let id: string | number;

id = '1001';
id = 1001;

// 类型守卫
// 当使用联合类型时，如果不明确具体的类型而去使用形参中的属性或者方法时会报错
// 解决方式是明确形参的类型，这个行为在 ts 中叫(narrowing)做类型守卫
function foo(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.length);
  }
}
foo('1001');
foo(1001);

export {};
