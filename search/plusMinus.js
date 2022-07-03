function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (const element of arr) {  
    element === 0 ? zero++ : element > 0 ? positive++ : negative++;
  }
   
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));

}

 



// plusMinus([1,1,0,-1,-1]);
plusMinus([-4,3,-9,0,4,1]);