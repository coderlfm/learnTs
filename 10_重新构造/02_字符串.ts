// 字符串收字母转换成大写
type CapitalizeStr<Str extends string> = Str extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : never;

type res1 = CapitalizeStr<'first'>; // type res1 = "First"

// 下划线转换成驼峰,先转换第一个下划线后的字母，然后再递归转换成驼峰
type CamelCase<Str extends string> = Str extends `${infer First}_${infer Right}${infer Rest}`
  ? `${First}${Uppercase<Right>}${CamelCase<Rest>}`
  : Str;

type res2 = CamelCase<'order_create_at'>;

// 替换字符串
type DropSubStr<Str extends string, SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
  : Str;

type Test = DropSubStr<'aabbccbb', 'bb'>; // type Test = "aacc"

// 删除字符串
