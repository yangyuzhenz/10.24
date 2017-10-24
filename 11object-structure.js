

// 声明变量 name 

// let {name: name} = {name: '小明'};

// console.log(name);

// 声明变量 abc 
// let {age: abc} = {age: 16};

// console.log(abc);

// 声明 abc 变量，值为 16
// let {age: abc} = {aaa: 18, age: 16};

// console.log(abc);

// 使用 对象解构是根据左右两侧的 属性 来对应
// 
// 与 数组不同，数组构是 左右两侧 一一对应（靠索引值）

// 上述过程中出现错误，其原因是使用解析赋值时，需要使用 关键字声明

var {name: name} = {name: '小明'};

console.log(name);