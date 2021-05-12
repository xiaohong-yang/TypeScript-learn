// 多个泛型参数的函数:函数中有多个泛型的参数
(function () {
    function getMsg(value1, value2) {
        return [value1, value2];
    }
    var arr1 = getMsg('jack', 100.2345);
    console.log(arr1[0].split(''));
    console.log(arr1[1].toFixed(1));
})();
