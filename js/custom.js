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
// fno=parseFloat(prompt("enter the first number"))
// sno=parseFloat(prompt("enter the second number"))
// alert(fno+sno)
// op=6
// switch(op){
//     case 1:console.log("sunday");
//     break;
//     case 2:console.log("monday");
//     break;
//     case 3:console.log("tuesday");
//     break;
//     default:console.log("invalid");
//     break;
// }
// i=1
// while(i<=10){
//     console.log(i);
//     i++;
// }
// i=1
// do{
//     console.log(i);
//     i=i+2;
// }while(i<=10)
//  for(i=1;i<=100;i++)
//     {
//     if(i%3==0){
//         console.log("fiz");
//     }
//     else{
//         console.log(i);
//     }
//     }   
// for(i=1;i<=100;i++)
//     {
//         if(i%5==0){
//             console.log("buzz");
//         }
//         else{
//             console.log(i)
//         }
//     }
    // for(i=1;i<=100;i++)
    //     {
    //         if(i%5==0&&i%3==0){
    //             console.log(" fizzbuzz");
    //         }
    //         else{
    //             console.log(i)
    //         }
    //     }
    for(i=1;i<=100;i++)
        {
            if(i%5==0&&i%3==0){
                console.log("fizzbuzz");
            }
            else if(i%3==0){
                console.log("fizz");
            }
            else if(i%5==0){        
                console.log("buzz");
            }
            
            
            else{
                console.log(i);
            }
        }