const num = 266219;
let numStr = String(num).split('');

console.log(numStr);
let mult = 1;

for (let i = 0; i <= numStr.length - 1; i++) {
  mult *= +numStr[i];
}
// or
const multNum = numStr.reduce(
  (previousValue, currentValue) => previousValue * currentValue
);

console.log('mult', mult);
console.log('multNum: ', multNum);

let pow = multNum ** 3;
console.log('pow: ', String(pow).substring(0, 2));
