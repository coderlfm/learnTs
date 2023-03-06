export {};

//  key 转成大写
// type 后 等于一个 {}，不再使用 extends

// 使用 Uppercase 将所有字母转成大写
type UpPercaseKey<T extends object> = {
  [Key in keyof T as Uppercase<Key & string>]: T[Key];
};

// 
type type2 = 'aa' | 'bb' | 'cc';
type UpPercaseKey2<T extends string> = Record<Uppercase<T>,string>

/**
type test3 = {
    AA: string;
    BB: string;
    CC: string;
}
 */
type test3 = UpPercaseKey2<type2>;

// Record

// 转换成只读
type ToReadonly<T extends object> = {
  readonly [Key in keyof T]: T[Key];
};

/**
type res1 = {
    readonly name: string;
    readonly age: number;
}
 */
type res1 = ToReadonly<{ name: string; age: number }>;

// 转换成可选

type ToPartial<T extends object> = {
  [Key in keyof T]?: T[Key];
};

/**
type res2 = {
    name?: string;
    age?: number;
}
 */
type res2 = ToPartial<{ name: string; age: number }>;

// 去掉只读 通过 - 来将只读去除
type ToMutable<T extends object> = {
  -readonly [Key in keyof T]: T[Key];
};

/**
type res3 = {
    name: string;
    age: number;
}
 */
type res3 = ToMutable<{ readonly name: string; readonly age: number }>;

// 去掉可选
type ToRequired<T extends object> = {
  [Key in keyof T]-?: T[Key];
};

/**
type res4 = {
    name: string;
    age: number;
}
 */
type res4 = ToRequired<{ name?: string; age?: number }>;


// 提取指定类型
type FilterByValueType<T extends Record<string, any>, ValueType> = {
  [Key in keyof T as ValueType extends T[Key] ? Key : never]: T[Key];
};

/*
type res5 = {
    name: string;
    age: number;
}
*/
type res5 = FilterByValueType<{ name: string; age: number; live: string[] }, string | number>;
