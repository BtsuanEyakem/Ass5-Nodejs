let arr2 = [3,25,5,26,25];
function sum(Sumbers){
   let sum1 = Sumbers.filter(p => p > 20).reduce((first1,last1)=>first1+last1,0);
   return sum1;
}
 
 console.log(sum(arr2));

