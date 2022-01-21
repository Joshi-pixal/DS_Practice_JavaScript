console.log('hello!');
//alert('This is aayush');

// How to   write a comment inline

// varibles

let b = 'smoothe';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//Manipualtion of DOM with JavaScript
/* It is just a fancy way of saying HTML with JavaScript*/

//document.getElementById('someText').innerHTML = 'HeyThere';

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

//Numebers in JavaScript
var num = 10;
console.log(num + 1);

//Increment by num by 1 
num++;

//Decrement by num by 1
num--;
console.log(num);

//Divided,multiply & remainder %
console.log(num/6);

//Increment and decrement by any number
num +=10;
console.log(num);

//Funtion
function fun(){
    consol.log('this is a function');
}
fun();

/*Create a function thats takes in a name and says hello followed by name*/
function greeting(){
    var name = prompt('What is you name');
    var result = 'hello'+ name;
    console.log(result);
}
greeting();

//How do argument work in function
//How do we add 2 numbers in function
function sumNumber(num1, num2){
    var result = (num1 + num2);
    console.log(result);
}
sumNumber(10,10);

//While loops
/*
var num = 0;

while (num < 100){
    num += 1;
    consol.log(num);
}
*/
//For loop 
for (let num = 0; num <= 100; num++) {
    console.log(num);
}
