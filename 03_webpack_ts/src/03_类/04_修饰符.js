var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 修饰符(类中的成员的修饰符):主要是描述类中的成员(属性,构造函数,方法)的可访问性
// 类中的成员都有自己的默认的访问修饰符,public
// public修饰符---公共的,类中成员默认的修饰符,代表的是公共的,任何位置都可以访问类中的成员
// private修饰符---私有的,类中的成员如果使用private来修饰,那么外部是无法访问这个成员数据的,当然,子类中也是无法访问该成员数据的
// protected修饰符----受保护的,类中的成员如果使用protected来修饰,那么外部是无法访问这个成员数据的,当然,子类中是可以访问该成员数据的
(function () {
    // 定义一个类
    var Person = /** @class */ (function () {
        // 构造函数
        function Person(name) {
            // 更新属性
            this.name = name;
        }
        // 方法
        Person.prototype.eat = function () {
            console.log('嗯,这个骨头真好吃', this.name);
        };
        return Person;
    }());
    // 定义一个子类
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        // 构造函数
        function Student(name) {
            return _super.call(this, name) || this;
        }
        Student.prototype.play = function () {
            console.log('我就喜欢玩布娃娃', this.name);
        };
        return Student;
    }(Person));
    // 实例化对象
    var per = new Person('大蛇丸');
    // 类的外部可以访问类中的属性成员
    // console.log(per.name)
    per.eat();
    var stu = new Student('红豆');
    stu.play();
    // console.log(stu.name) // 报错，此处是外部，不能直接访问protected修饰的属性成员
})();
