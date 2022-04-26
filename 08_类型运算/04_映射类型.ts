export {};

// keyof T 会取到索引类型的键，是一个联合类型 string|number|symbol
// key in 去遍历联合类型的 key
// T[key] 会从类型中获取对应值

type MapType<T> = {
  [key in keyof T]: [T[key], T[key], T[key]];
};

/*
type res1 = {
    a: [1, 1, 1];
    b: [2, 2, 2];
}
*/
type res1 = MapType<{ a: 1; b: 2 }>;

// 重映射
// 因为 key 是联合类型 string|number|symbol
type MapType2<T> = {
  [key in keyof T as `${key & string}-${key & string}-${key & string}`]: [T[key], T[key], T[key]];
};

type res2 = MapType2<{ a: 1; b: 2 }>;
/*
type res2 = {
    "a-a-a": [1, 1, 1];
    "b-b-b": [2, 2, 2];
}
*/