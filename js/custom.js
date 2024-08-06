a=10
b=10
c=20
console.log(a+b);
console.log(a+c);
console.log(a==b&&b==c);
console.log(+"5");
console.log(5+ +"5");
console.log(a+=b);
console.log(!false);
console.log(a==b||a==c);
console.log(a*b);
mark=93
if(mark>90){
    console.log("A+");
}

else if(mark>70){
    console.log("A")
}
else if(mark>60){
    console.log("B+")
}
else if(mark>50){
    console.log("B")
}
else if(mark>40){
    console.log("C+")
}
else if(mark>30){
    console.log("FAILED");
}

// score=prompt("enter your score")
// if(score>90){
//     alert('pass')
// }
// else{
//     alert('fail')
// }
fno=parseFloat(prompt("enter the first number"))
sno=parseFloat(prompt("enter the second number"))
alert(fno+sno)