{
  class Student {
    public name: string;
    public readonly grade: string;

    constructor(name: string, grade: string) {
      this.name = name;
      this.grade = grade;
    }
  }

  const stu = new Student('小明', '1班');

  console.log(`${stu.name}的班级为:${stu.grade}`);

  // stu.grade = '2班';    // 无法分配到 "grade" ，因为它是只读属性
}
