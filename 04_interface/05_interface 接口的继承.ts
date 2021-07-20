/* 
  在 Typescript 中，接口可以继承和被继承，
*/

{
  interface Animal {
    run: () => void;
  }

  interface Person extends Animal {
    name: string;
  }

  const info: Person = {
    name: '小明',
    run() {},
  };
}

/* 
接口的多继承
*/
{
  interface Animal {
    run: () => void;
  }

  interface Person {
    name: string;
  }

  interface Info extends Animal, Person {
    age: number;
  }

  const info: Info = {
    name: '小明',
    run() {},
    age: 18,
  };
}
