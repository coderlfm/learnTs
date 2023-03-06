export {}

// 这个 asserts 断言很强，可以确保调用过这个函数过后，后续的类型绝对是安全的。
function assetsString(value: string | boolean): asserts value is string {

  if (typeof value !== 'string') {
    throw new Error('type error')
  }
  
}


const test1: string = 'aaa';
assetsString(test1);
type t1 = typeof test1;

const test2: boolean = true;
assetsString(test2);
type t2 = typeof test1;
