// import { myfn } from './util.js';

// console.log(myfn);

// myfn();

// export default () => {
//     console.log(`the answer is`);
// }

// class MyMath{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     add(){
//         return this.x + this.y;
//     }
// };

// const m = new MyMath(1,3);
// console.log(m.add());

// console.log(typeof MyMath);
// console.log(MyMath === MyMath.prototype.constructor);
// console.log(m.__proto__ === MyMath.prototype);



// function Animal(){
//     this.eat = function(){
//         alert('animal eat')
//     }
// };
// // 狗
// function Dog(){
//     this.bark = function(){
//         alert('dog bark')
//     }
// };
// // 绑定原型，实现继承
// Dog.prototype = new Animal();
// // 实例化Dog
// var husky = new Dog();
// // 验证
// husky.bark();
// husky.eat();




// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         alert(`${this.name} eat`);
//     }
// };

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//         this.name = name
//     }
//     say(){
//         alert(`${this.name} say`);
//     }
// };

// const dog = new Dog('Husky');
// dog.eat();
// dog.say();




// function loadImg(src, callback, fail) {
//     var img = document.createElement('img');
//     img.onload = function () {
//         callback(img);
//     };
//     img.onerror = function () {
//         fail();
//     };
//     img.src = src;
// };

// var src = 'http://www.baidu.com/img/baidu_jgylogo3.gif';
// loadImg(src, function (img) {
//     alert(img.width)
// }, function () {
//     alert('something is wrong')
// });




// function loadImg(src){
//     const promise = new Promise(function(resolve,reject){
//       var img = document.createElement('img');
//       img.onload = function(){
//           resolve(img);
//       };
//       img.onerror = function(){
//           reject();
//       };
//       img.src = src;
//     });
//     return promise;
// }

// var src = 'http://www.baidu.com/img/baidu_jgylogo3.gif';
// // 保存为一个promise对象
// var result = loadImg(src);
// // 打印宽度，一个then
// result.then(function(img){
//     alert(img.width);
// },function(){
//     alert('something went wrong')
// });
// // 打印高度，一个then
// result.then(function(img){
//     alert(img.height);
// },function(){
//     alert('something went wrong')
// });


// const obj = {a: 100, b: 200, c: 300};
// const {a, c} = obj;
// console.log(a);
// console.log(c);

// const arr = ['xxx', 'yyy', 'zzz'];
// const [x,y,z] = arr;
// console.log(x); // xxx
// console.log(y); // yyy
// console.log(z); // zzz



function fn() {
    console.log('real',this) //{a:100}
    var arr = [1,2,3];
    // 普通JS
    arr.map(function(item) {
        console.log('js', this, item); // window
        return item + 1;
    });
    // 箭头函数
    arr.map((item) => {
        console.log('es6', this); // {a:100}
        return item + 1;
    });
}
fn.call({a: 100});