
// 封装了一个 核心处理函数，只支持 string 和 number 类型，
// 如果手动修改类型，则 check 会报错，需要增加一行 对于新增 的类型处理
function handleMessage (message: string | number | boolean) {
  
  // 穷举检查
  switch (typeof message) {
    case 'string':
      console.log('字符串处理');
      break;

    case 'number':
      console.log('数字处理');
      break;

    case 'boolean':
      console.log('布尔值处理');
      break;
  
    default:
    // 应该绝不可能走到这一步
    // 不应该存在的类型
    const check:never = message
  }
}

handleMessage(123);
handleMessage('hello');
handleMessage(true);