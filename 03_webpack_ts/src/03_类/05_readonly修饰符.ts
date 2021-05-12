// readonly修饰符:首先是一个关键字,对类中的属性成员进行修饰,修饰后,该属性成员,就不能在外部被随意的修改了
// 构造函数中,可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何的参数,类中的属性成员此时已经使用readonly进行修饰了,那么外部也是不能对这个属性值进行更改的
// 构造函数中的参数可以使用readonly进行修饰,一旦修饰了,那么该类中就有了这个只读的成员属性了,外部可以访问,但是不能修改
// 构造函数中的参数可以使用public及private和protected进行修饰,无论是哪个进行修饰,该类中都会自动的添加这么一个属性成员
(() => {


  // readonly修饰类中的成员属性操作

  // 定义一个类型
  class Person1 {
    // 属性
    // readonly name: string='大甜甜' // 初始值
    readonly name: string
    // 构造函数
    constructor(name: string = '大甜甜') {
      this.name = name
    }
    sayHi() {
      console.log('考尼奇瓦', this.name)
      // 类中的普通方法中,也是不能修改readonly修饰的成员属性值
      // this.name = '大甜甜'
    }
  }
  // 实例化对象
  const person1: Person1 = new Person1('小甜甜')

  person1.sayHi()
  console.log(person1)
  console.log(person1.name)
  // 此时无法修改,因为name属性是只读的
  // person1.name = '大甜甜'
  // console.log(person1.name)

  console.log('===================================')

  // readonly修饰类中的构造函数中的参数(参数属性)

  // 定义一个类型
  class Person2 {
    // 构造函数

    // 构造函数中的name参数,一旦使用readonly进行修饰后,那么该name参数可以叫参数属性
    // 构造函数中的name参数,一旦使用readonly进行修饰后,那么Person中就有了一个name的属性成员
    // 构造函数中的name参数,一旦使用readonly进行修饰后,外部也是无法修改类中的name属性成员值的
    // constructor(readonly name: string = '大甜甜') {
    //   this.name = name
    // }

    // 构造函数中的name参数,一旦使用public进行修饰后,那么Person类中就有了一个公共的name属性成员了
    constructor(public name: string = '大甜甜') {
      this.name = name
    }

    // 构造函数中的name参数,一旦使用private进行修饰后,那么Person类中就有了一个私有的name属性成员了
    // constructor(private name: string = '大甜甜') {
    //   this.name = name
    // }

    // 构造函数中的name参数,一旦使用protected进行修饰后,那么Person类中就有了一个受保护的name属性成员了(只能在本类和派生类(也就是子类)中访问及使用)
    // constructor(protected name: string = '大甜甜') {
    //   this.name = name
    // }

  }
  // 实例化对象
  const person2: Person2 = new Person2('小甜甜')

  console.log(person2)
  person2.name = '佐助'
  console.log(person2.name)

})()
