
// var a = 'a';

// var b = 'b';

// var a = 'a', b = 'b';

// let a = 'a', b = 'b';

// 1、基本用法
// var [a, b, c] = ['aa', 'bb', 'cc'];
// 相当于下面旧写法
// var a = 'aa', b = 'bb', c = 'cc';

// console.log(a, b, c);

// 2、灵活性
// var info = [{name: '小明'}, 'hello', 'world'];

// var obj = info[0];

// var h = info[1];

// var [obj, h, w] = info;

// console.log(obj);

// 2、一一对应，当没有对应的单元时，值为 undefined
let [a, b, c] = [1, 2];

// 注：let 声明的变量，不允许重复声明

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // undefined

[a, b, c] = [1, 2, null];

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // null

// bug
// [a, b, c...] = [1, 2, 3, 4, 5, 6];

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// 
[a, [b, c], d] = [1, [2, 3], 4];

console.log(a); // 1

console.log(b); // 2

console.log(c); // 3

console.log(d); // 4