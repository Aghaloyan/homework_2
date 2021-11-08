console.log(findPrimes(5,13));
function findPrimes(num1,num2)
{
    let primes = [];
    for(i = num1;i<=num2;i++)
    {             
        if(isPrime(i)){
          primes.push(i);
        }
    }
    return primes;
}
function isPrime(num)
{
    let p = true;
    for(j = 2;j<=Math.sqrt(num);j++)
    {
        if(num%j==0)
        {
            p = false;
            break;
        }
    }
    return p;
}