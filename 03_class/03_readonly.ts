/* 
当我们给类中的
*/
{
  class Student {
    name: string;
    readonly grade: string;
    // 如果 可见性修饰符 和 只读修饰符 同时出现，则 readonly 放在可见性修饰符后面

    constructor(name: string, grade: string) {
      this.name = name;
      this.grade = grade;
    }
  }

  const stu = new Student('小明', '1班');

  console.log(`${stu.name}的班级为:${stu.grade}`);

  // stu.grade = '2班';    // 无法分配到 "grade" ，因为它是只读属性
}
