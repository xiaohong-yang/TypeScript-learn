// 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
(function () {
    function getLength(x) {
        return x.length;
    }
    console.log(getLength('what are you no sha lei'));
    // console.log(getLength<number>(123))
})();
