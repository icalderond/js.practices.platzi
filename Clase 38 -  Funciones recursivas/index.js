/*
13 / 4
13 - 4 = 9    1
9 - 4 = 4     1
5 - 4 = 1     1
1 - 4 = -3
*/

function divisionEntera(dividendo, divisor) {
  if(dividendo < divisor){
    return 0
  }
console.log(`${dividendo} / ${divisor}`);
  return 1 + divisionEntera((dividendo - divisor),divisor)
}

console.log(divisionEntera(33,3));
