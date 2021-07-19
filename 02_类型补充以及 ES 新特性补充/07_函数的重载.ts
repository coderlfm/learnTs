/* 
在很多语言中都有函数的重载，例如 `java`
当我们一个函数可以接收多个参数时，可以使用函数的重载

函数的重载

在可以的情况下，建议多使用联合类型，而非重载
TypeScript 
 */

function info(name: string): void;
function info(name: string, age: number): void;
function info(name: string, age?: number) {
  console.log('name:', name);
  console.log('age:', age);
}

info('ts');
info('ts', 18);

// function convert(x: string): number;
// function convert(x: number): string;
// function convert(x: null): -1;
// function convert(x: string | number | null): any {
//     if (typeof x === 'string') {
//         return Number(x);
//     }
//     if (typeof x === 'number') {
//         return String(x);
//     }
//     return -1;
// }

export {};
