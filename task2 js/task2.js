/*----1---/*
var count;
for(i=1;i<=10;i++){

console.log(i);

}*/
/*----2---/*
var count;
for(i=0;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}*/
/*----3---/*
var count=1;
while(count<=10){
    if(count%2!=0){
        console.log(count);
    }
    count++;
}*/
/*----4---/*
var count=6;
for(i=1;i<=12;i++){
    var z=i*count;
    console.log(z);

}*/
/*----5---/*
var count=0;

while(count<=100){
  count +=0;
    count++;
    console.log(count);
}*/
/*----6---/*
var fact=4;
for(i=1;i<=4;i++){
    fact*=i;
    console.log(fact);
}*/
/*----7---/*
let userInput = prompt("Enter a number to generate the Fibonacci series up to that number:");
let maxNumber = parseInt(userInput);

if (isNaN(maxNumber)) {
    console.log("Please enter a valid number.");
} else {
    let num1 = 0, num2 = 1;
    console.log(num1);
    while (num2 <= maxNumber) {
        console.log(num2);
        let nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}
*/
/*----8---/*
var num=[5,10,15,20];
var ind=num.length-1;
while(ind>=0){
    console.log(num[ind]);
    ind--;
}*/
