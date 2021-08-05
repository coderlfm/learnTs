// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
interface Person {
  name: string;
  age?: number;
  weight?: number;
}
type PartialPerson = Partial<Person>;

// 相当于
// interface PartialPerson {
//   name?: string;
//   age?: number;
//   weight?: number;
// }