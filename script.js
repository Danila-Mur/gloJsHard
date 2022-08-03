const strOperation = (str) => {
  if (typeof str !== 'string') {
    console.log('Передана не строка');
    return;
  }
  
  if (str.length > 30) {
    str = str.trim().slice(0, 30);
    str += '...';
  }

  return str;
};

console.log(strOperation('        123456789123456789123456789123456789'));
