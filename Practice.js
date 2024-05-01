// function deleteElement(arr, ele) {
//     for (var i=0;i<arr.length;i++){
//       if(arr[i]==ele){
//         arr.splice(i,1); //Delete element from array
//       }
//     }
//     return arr;
//   }
//   var arr = [23,56,4,78,5,63,45,210,56];
//   arr = deleteElement(arr, 56)
  
//   console.log(arr); //[23, 4, 78, 5, 63, 45, 210]












// for(var i=0;i<8;i++){
//     setTimeout(()=>
//     console.log(i), 2000);// 5 5 5 5 5
//     setTimeout(()=>{
//         console.log('hello');
//     },5000)
//   }







// function printPattern(range) {
//     for(var i=1;i<=range;i++){
//       var str="";
//       for(var j=1;j<=i;j++){
//         str += j+" ";
//       }
//       console.log(str);
//     }
//   }
//   printPattern(5);
  
// //   /* 1 
//      1 2 
//      1 2 3 
//      1 2 3 4 
//      1 2 3 4 5 
//      1 2 3 4 5 6 
//      1 2 3 4 5 6 7 
//      1 2 3 4 5 6 7 8 */











function digitCount(num) {
    var count=0; //return 1 for pow=0
    while(num!=0){
      num=Math.floor(num/10);
      count++;
    }
    return count;
  }
  console.log(digitCount(8367867)); //4
  console.log(digitCount(563349)); //6