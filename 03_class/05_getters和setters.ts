/* 
`getter` 和 `setter` 可以来截取我们队属性的获取和设置
需要注意以下几点
- 如果只写了 `get`，没有写`set`，则该属性为 `readonly`
- 如果 `set` 的参数没有写类型注解，则会根据 `get` 的返回值推导
- `set` 和 `get` 的可见性修饰符必须一致，例如：不允许 `get` 为 `public`，而 `set` 为 `private`
 */

{
  class Person {
    _home = '';
    public get home() {
      return this._home;
    }

    // 如果没有 set，则该属性会推导为只读属性
    // set 和 get 的可见性修饰符必须是一致的
    public set home(value) {
      // 如果没有指定 set 形参的类型则会根据 get 函数的返回值来推导
      this._home = value;
    }
  }

  const person = new Person();
  person.home = '成都';
  console.log(person.home); // 成都
}
