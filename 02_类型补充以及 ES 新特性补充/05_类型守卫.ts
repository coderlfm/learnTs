// ts 中关于类型守卫的判断有多重方式，以下列举两种

/* 
ts 一共支持以下几种方式来进行类型缩小

- typeof
- true 判断值是否为空
- 平等类型的对比 === , ==, !==, !=
- in 关键字
- instanceof
— <,>
- if
- as 
- 字面量类型
- never
- 穷举, switch

 */

// 示例1. 使用 typeof
// 打印所有的参数
function seeId(id: number | string) {
  // id = id.toLocaleLowerCase();  // 报错

  if (typeof id === 'string') {
    id = id.toLocaleLowerCase(); // 正常
    console.log(id);
  } else {
    console.log(id);
  }
}

// 示例1. 使用 in 关键字
type teacher = { vehicle: () => void };
type coder = { codering: () => void };

function work(people: teacher | coder) {
  // people.codering(); //报错
  if ('codering' in people) {
    people.codering();
  } else {
    people.vehicle();
  }
}


