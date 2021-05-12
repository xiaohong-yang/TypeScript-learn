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
// 抽象类:包含抽象方法(抽象方法一般没有任何的具体内容的实现),也可以包含实例方法,抽象类是不能被实例化,为了让子类进行实例化及实现内部的抽象方法
// 抽象类的目的或者是作用最终都是为子类服务的
(function () {
    // 定义一个抽象类
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        // 报错的,抽象方法不能有具体的实现
        // abstract eat(){
        //   console.log('趴着吃,跳着吃')
        // }
        // 实例方法
        Animal.prototype.sayHi = function () {
            console.log('您好啊');
        };
        return Animal;
    }());
    // 定义一个子类(派生类)Dog
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // name:string='小黄'
        // 重新的实现抽象类中的方法,此时这个方法就是当前Dog类的实例方法了
        Dog.prototype.eat = function () {
            console.log('舔着吃,真好吃');
        };
        return Dog;
    }(Animal));
    // 实例化Dog的对象
    var dog = new Dog();
    dog.eat();
    // 调用的是抽象类中的实例方法
    dog.sayHi();
    // console.log(dog.name)
    // 不能实例化抽象类的对象
    // const ani:Animal = new Animal()
})();
