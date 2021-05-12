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
// 多态:父类型的引用指向了子类型的对象,不同类型的对象针对相同的方法,产生了不同的行为
(function () {
    // 定义一个父类
    var Animal = /** @class */ (function () {
        // 定义一个构造函数
        function Animal(name) {
            // 更新属性值
            this.name = name;
        }
        // 实例方法
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log("\u8DD1\u4E86" + distance + " \u7C73\u8FD9\u4E48\u8FDC\u7684\u8DDD\u79BB", this.name);
        };
        return Animal;
    }());
    // 定义一个子类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        // 构造函数
        function Dog(name) {
            // 调用父类的构造函数,实现子类中属性的初始化操作
            return _super.call(this, name) || this;
        }
        // 实例方法,重写父类中的实例方法
        Dog.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log("\u8DD1\u4E86" + distance + " \u7C73\u8FD9\u4E48\u8FDC\u7684\u8DDD\u79BB", this.name);
        };
        return Dog;
    }(Animal));
    // 定义一个子类
    var Pig = /** @class */ (function (_super) {
        __extends(Pig, _super);
        // 构造函数
        function Pig(name) {
            // 调用父类的构造函数,实现子类中属性的初始化操作
            return _super.call(this, name) || this;
        }
        // 实例方法,重写父类中的实例方法
        Pig.prototype.run = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log("\u8DD1\u4E86" + distance + " \u7C73\u8FD9\u4E48\u8FDC\u7684\u8DDD\u79BB", this.name);
        };
        return Pig;
    }(Animal));
    // 实例化父类对象
    var ani = new Animal('动物');
    ani.run();
    // 实例化子类对象
    var dog = new Dog('大黄');
    dog.run();
    // 实例化子类对象
    var pig = new Pig('八戒');
    pig.run();
    console.log('===========');
    // 父类和子类的关系:父子关系,此时,父类类型创建子类的对象
    var dog1 = new Dog('小黄');
    dog1.run();
    var pig1 = new Pig('小猪');
    pig1.run();
    console.log('=============');
    // 该函数需要的参数是Animal类型的
    function showRun(ani) {
        ani.run();
    }
    showRun(dog1);
    showRun(pig1);
})();
