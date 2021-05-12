// 类:可以理解为模版,通过模版可以实例化对象
// 面向对象的编程思想
(function () {
    // ts中类的定义及使用
    var Person = /** @class */ (function () {
        // 定义构造函数:为了将来实例化对象的时候,可以直接对属性的值进行初始化
        function Person(name, age, gender) {
            if (name === void 0) { name = '小甜甜'; }
            if (age === void 0) { age = 16; }
            if (gender === void 0) { gender = '女'; }
            // 更新对象中的属性数据
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        // 定义实例方法
        Person.prototype.sayHi = function (str) {
            console.log("\u5927\u5BB6\u597D,\u6211\u662F" + this.name + ",\u4ECA\u5E74\u5DF2\u7ECF" + this.age + "\u5C81\u4E86,\u662F\u4E2A" + this.gender + "\u5B69\u5B50,", str);
        };
        return Person;
    }());
    // ts中使用类,实例化对象,可以直接进行初始化操作
    var person = new Person('佐助', 18, '男');
    person.sayHi('你叫什么名字啊');
})();
