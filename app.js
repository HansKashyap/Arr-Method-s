


// #Loops//
// var n=prompt("Enter your number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n)
// console.log(i);






// const favMovei='dhamaal'
// let guess=prompt('guess my faverite movei ')
// // while( (guess!=favMovei )&& (guess!='quit') )
//         while(guess!=favMovei )
//         if(guess=='quit')
//         //through break keyword
//         {
//             console.log('you quit');
//             break;
//         }
// {
// //    console.log('Wrong guess!');
//    guess=prompt('Wrong guess!please tyr again!')
//    console.log(guess);
// }

// if(guess==favMovei)
// {
// console.log('Right!!');
// }
// else
// {
//     console.log('you quit!');
// }








// ARRAY WITH LOOP
// let arr=['mango','banana','orange','apple','pinepple']
// arr.push('carrot')
// for(i=1;i<arr.length;i=i+2)
// for(i=0;i<arr.length;i=i+2)
// for(let i=0;i<arr.length;i++)
// {
//     console.log(i,arr[i]);
// }
// let revers=arr.reverse()
// console.log(revers);


// for(let i=arr.length-1;i>=0;i--)
// {
//     console.log(i,arr[i]);
// }







// // NESTED ARRAY WITH NESTED LOOP
// let heros=[['ironman','spiderman','thor'],
// ['superman','wonder women','flash']]
// // console.log(heros);
// for (let i=0;i<heros.length;i++)
// {
// console.log(i,heros[i]);

//  for(j=0;j<heros[i].length;j++)
 
// {
//  console.log(`j=${i,j},${heros[i][j]}`);
//  }
// }



let students=  [ ["hansu",85], ["parsu",65], ["sant",80] ]
for(let i=0;i<students.length;i++){

    console.log(`info of students #${i}`);


    for(let j=0;j<students[i].length;j++)
    {
    
    console.log(students[i][j]);
    
}
}