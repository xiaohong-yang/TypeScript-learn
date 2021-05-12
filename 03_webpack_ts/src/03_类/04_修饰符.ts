// 修饰符(类中的成员的修饰符):主要是描述类中的成员(属性,构造函数,方法)的可访问性
// 类中的成员都有自己的默认的访问修饰符,public
// public修饰符---公共的,类中成员默认的修饰符,代表的是公共的,任何位置都可以访问类中的成员
// private修饰符---私有的,类中的成员如果使用private来修饰,那么外部是无法访问这个成员数据的,当然,子类中也是无法访问该成员数据的
// protected修饰符----受保护的,类中的成员如果使用protected来修饰,那么外部是无法访问这个成员数据的,当然,子类中是可以访问该成员数据的
(() => {

  // 定义一个类
  class Person {
    // 属性 public 修饰了属性成员
    // public name: string
    // 属性 private 修饰了属性成员
    // private name: string
    // 属性protected 修饰了属性成员
    protected name:string
    // 构造函数
    public constructor(name: string) {
      // 更新属性
      this.name = name
    }
    // 方法
    public eat() {
      console.log('嗯,这个骨头真好吃', this.name)
    }
  }
  // 定义一个子类
  class Student extends Person {
    // 构造函数
    constructor(name: string) {
      super(name)
    }
    play() {
      console.log('我就喜欢玩布娃娃',this.name)
    }

  }

  // 实例化对象
  const per = new Person('大蛇丸')
  // 类的外部可以访问类中的属性成员
  // console.log(per.name)
  per.eat()
  const stu = new Student('红豆')
  stu.play()
  // console.log(stu.name) // 报错，此处是外部，不能直接访问protected修饰的属性成员
})()
