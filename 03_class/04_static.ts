/* 
静态属性/方法
静态属性 和方法只能通过类去访问
*/

{
  class Student {
    public static school = '希望小学';

    // static saySchool(this: Student) {
    //   // console.log(this.school);
    // }

    static saySchool() {
      console.log(`I am a Student class`);
    }
  }

  // Student.school = '实验小学';
  console.log(Student.school); // 实验小学
}

// TODO: 静态属性也可使用 public，protected和private 可见性修饰符
{
  class Student {
    private static school = '希望小学';
  }

  // Student.school = '实验小学';  // 属性“school”为私有属性，只能在类“Student”中访问
}

// TODO: 静态属性注意事项
// 因为 覆盖 `Function` 上的属性和方法时不安全的，所以例如 name ，length ，call，bind等不能定位有静态属性
{
  class Student {
    // static name = 'hello';  // 静态属性“name”与构造函数“Student”的内置属性函数“name”冲突。ts(2699)
    // static length = 10;
    // static call = 'call';
  }
}
