
// var abc = 'hello';

function fn() {
    var abc = 'world!';
}

// 块级(使用关键字 let 来创建一个块级变量)
if(true) {
    // var abc = 'hello world!';
    let abc = 'hello world!';

    console.log(abc);
}

console.log(abc);