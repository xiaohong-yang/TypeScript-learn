(function () {
    // 定义一个类,类中的属性值的类型是不确定,方法中的参数及返回值的类型也是不确定
    // 定义一个泛型类
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    // 在实例化类的对象的时候,再确定泛型的类型
    var g1 = new GenericNumber();
    // 设置属性值
    g1.defaultValue = 100;
    // 相加的方法
    g1.add = function (x, y) {
        return x + y;
    };
    console.log(g1.add(g1.defaultValue, 20));
    // 在实例化类的对象的时候,再确定泛型的类型
    var g2 = new GenericNumber();
    // 设置属性值
    g2.defaultValue = '哈哈';
    // 相加的方法
    g2.add = function (x, y) {
        return x + y;
    };
    console.log(g2.add('帅杨', g2.defaultValue));
})();
