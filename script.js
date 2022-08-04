// 1
const arr = ['123456', '242376', '241124', '7412421', '894129', '7881294', '32412'];
console.log('arr: ', arr);

arr.find((el) => {
  if (el[0] === '2' || el[0] === '7') {
    console.log(el);
  }
})

//
const num = 100;
for (let i = 1; i <= num; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i, 'Делители этого числа 1 и ' + i );
    }
  }
}