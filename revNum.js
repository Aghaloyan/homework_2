console.log(reverseNum(67364));

function reverseNum(num)
{
  let sum = 0;
  while(num>0)
  {
      sum = sum * 10 + num%10;
      num = Math.floor(num/10);
  }
  return sum;
