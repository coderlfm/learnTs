type Info = { age: number } | { age: never; [propsNmae: string]: string };

const info: Info = {
  age: 18,
  name: 'lfm',
};
