/* 
  可以看到，在多数情况下，接口类型和 类型别名的功能类似，但是在某些情况下还是有所区别  
*/

/* 
  例如我们使用一些第三方库的时候，需要做一些类型扩展，重复定义接口类型，那么它的属性会叠加，这个特性可以很方便的使我们扩展

*/

interface IInfo {
  id: number;
}

interface IInfo {
  name: string;
}

const info: IInfo = {
  id: 1001,
  name: '小明',
};

class A {
  name:'xxx'
}

function createA() {
  return new A()
}

const a = createA()

{
  
  type AA = Record<string, number>
  const fn = <T extends AA = {}, K = T>(params: K) => {
    const a = <K>{ };
    a['b'] = 111
    
    return a;
  }
  
  const res = fn({ b: 100 })
  res.b
  
  // res.a;
}

export {};