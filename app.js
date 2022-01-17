const reverse = (num) => {
  num = String(num);
  let result = '';
  for (let i = 1; i < num.length+1; i++) {
    result = `${result}${num[num.length-i]}`;
  }
  return result;
};
 
console.log(reverse(1562))
