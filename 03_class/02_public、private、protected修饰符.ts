// public, private, protected
/* 
- public (公共的)
  在缺省的情况下，默认类中的属性和方法都是 public 修饰的
- private (私有的)
  私有的属性或者方法，使用 private 修饰的属性和方法只能在这个类自身内使用，不能被子类或者 new出来的示例修改
- protected (受保护的)
  可以在子类中访问，但是不能再实例中访问
*/

// TODO: public 和 private 修饰符的使用
{
  class Person {
    // TypeScript 在类中声明的 private 只是编译阶段的 private，如果强制忽略 ts 的语法检测，
    // 在 js 运行阶段时依旧可以获取到 prefix 属性，这是因为 JavaScript 并不支持真正意义的 private；
    public name: string;
    private nation = '中国';

    constructor(name: string) {
      this.name = name;
    }
  }

  const person = new Person('小明');
  // person.nation = '英国';  // ts 语法报错，运行阶段实际上是可以获取的

  console.log(person);
}

// TODO: 子类中如何获取 父类中的 私有属性
{
  class Person {
    public name: string;
    private nation = '中国';

    constructor(name: string) {
      this.name = name;
    }

    getNation() {
      return this.nation;
    }

    setNation(nation: string) {
      this.nation = nation;
    }
  }

  class Man extends Person {
    printNation() {
      console.log(this.getNation());
    }
  }

  const man = new Man('小明');
  // person.nation = '英国';  // ts 语法报错，运行阶段实际上是可以获取的
  // man.printNation();

  // 通过调用子类中的方法来获取，或者实例也可以直接调用 getNation() 因为 该函数的声明是缺省的，默认是 public，如果将它的修饰符改为 protected 则实例无法调用
  console.log(man.getNation());
}

// TODO: protected 修饰符的使用
{
  class Person {
    public name: string;
    protected sex: string = '男'; // protected 修饰的属性可以在子类中访问，但是实例上不可以访问

    constructor(name: string) {
      this.name = name;
    }
  }

  class Man extends Person {
    constructor(name: string) {
      super(name);
    }

    saySex() {
      console.log(this.sex);    // 子类可以访问父类中用 protected 修饰的成员
    }
  }

  const man = new Man('小明');
  man.saySex(); // 男
  // man.sex = 'woman'; // ts 语法报错，实例不能访问受保护的类型属性或方法
}
