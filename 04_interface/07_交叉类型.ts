/* 
  交叉类型顾名思义，就是既有这个类型，又有另外一个类型
  交叉类型放在这个位置是因为待会要引出 interface 和 type 的区别
*/

{
  interface Color {
    color: string;
  }

  interface Text {
    text: string;
  }

  type Font = Color & Text;

  function renderMsg(context: Font) {
    console.log(context.color, context.text);
  }

  renderMsg({ color: 'green', text: '成功' });
}
