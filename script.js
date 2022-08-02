const strOperation = (str) => {
  if (typeof str !== 'string') {
    alert('Передана не строка');
    return;
  }

  str.replace(/ /g, '').slice(0, 30);
  if (str.length > 30) {
    str += '...';
  }

  return str;
};

console.log(strOperation('123456789123456789123456789123456789'));
