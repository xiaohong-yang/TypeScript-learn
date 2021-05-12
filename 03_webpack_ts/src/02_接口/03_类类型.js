// 类 类型: 类的类型,类的类型可以通过接口来实现
(function () {
    // 定义一个类,这个类的类型就是上面定义的接口(实际上也可以理解为,IFly接口约束了当前的这个Person类)
    var Person = /** @class */ (function () {
        function Person() {
        }
        // 实现接口中的方法
        Person.prototype.fly = function () {
            console.log('我会飞了,我是超人');
        };
        return Person;
    }());
    // 实例化对象
    var person = new Person();
    person.fly();
    // 定义一个类,这个类的类型就是IFly和ISwim(当前这个类可以实现多个接口,一个类同时也可以被多个接口进行约束)
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.fly = function () {
            console.log('我飞了2');
        };
        Person2.prototype.swim = function () {
            console.log('我会游泳啦2');
        };
        return Person2;
    }());
    // 实例化对象
    var person2 = new Person2();
    person2.fly();
    person2.swim();
    // 定义一个类,直接实现IMyFlyAndSwim这个接口
    var Person3 = /** @class */ (function () {
        function Person3() {
        }
        Person3.prototype.fly = function () {
            console.log('我飞了3');
        };
        Person3.prototype.swim = function () {
            console.log('我会游泳啦3');
        };
        return Person3;
    }());
    var person3 = new Person3();
    person3.fly();
    person3.swim();
    // 总结:接口和接口之间叫继承(使用的是extends关键字),类和接口之间叫实现(使用的是implements)
})();
