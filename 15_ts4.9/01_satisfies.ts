export { }

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

{
  // 这种写法，推断不出来属性具体是什么类型
  const palette: Record<Colors, string | RGB> = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255]
  };

  const redComponent = palette.red.includes(255);
}

{
  // 这种写法，会在编写的时候就将类型固定
  const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255]
  } satisfies Record<Colors, string | RGB>;

  const redComponent = palette.red.includes(255);
}

{
  // 确保对象拥有某几个键
  const obj: Record<Colors, unknown> = {
    'green': 'a',
    'blue': 'b',
    'aaa':'c',
    'red': 'c'
  }
  
  // 确保对象拥有某几个键
  const obj2 = {
    'green': 'a',
    'blue': 'b',
    'aaa': 'c',
    'red': 'c'
  } satisfies Record<Colors, unknown>;

}

{
  // 确保对象拥有某几种值
  const obj: Record<string, string | RGB> = {
    'green': 'a',
    'blue': 'b',
    'aaa': 1,
    'red': [0, 0, 255]
  }

  // 确保对象拥有某几种值
  const obj2 = {
    'green': 'a',
    'blue': 'b',
    'aaa': 1,
    'red': [0, 0, 255]
  } satisfies Record<string, string | RGB>;

}