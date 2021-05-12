// 剩余参数(rest参数)
// 剩余参数是放在函数声明的时候所有的参数的最后
(() => {
  // ...args:string[] ---->剩余的参数,放在了一个字符串的数组中,args里面
  function showMsg(str: string,str2:string, ...args: string[]) {
    console.log(str) // a
    // console.log(str2) // b
    console.log(args) // c ,d, e
  }
  showMsg('a','b','c','d','e')
})()
