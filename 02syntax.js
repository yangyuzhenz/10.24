
var str = 'hello world!';

console.log(str);

var arr = ['html', 'javascript', 'css'];

console.log(arr);

var obj = {name: '小明', age: 16};

console.log(obj);

function sayHi(arg) {
    console.log('你好 ' + arg);
}

sayHi('小红');

for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

for(var key in obj) {
    console.log(key, obj[key]);
}

alert(1);