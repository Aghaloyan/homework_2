function sumBinary (number1 , number2) {
    let number1Array = [];
    let number2Array = [];
    for(let i = 0; i <= number1.length - 1; i++) {
        number1Array.push(Number(number1[i]));
    }
    for(let i = 0; i <= number2.length - 1; i++) {
        number2Array.push(Number(number2[i]));
    }
    if(number1Array.length < number2Array.length) {
        for(let i = number1Array.length; i <= number2Array.length - 1; i++){
            number1Array.unshift(0);
        }
    } else if (number2Array.length < number1Array.length) {
        for (let i = number2Array.length; i <= number1Array.length - 1; i++) {
            number2Array.unshift(0);
        }
    }


    let carry = 0;
    let sum = [];
    for (let i = number1Array.length - 1; i >= 0; i--){
        if(number1Array[i] + number2Array[i] === 2) {
            sum[i] = carry;
            carry = 1;
        } else if (number1Array[i] + number2Array[i] + carry === 2){
            sum[i] = 0
            carry = 1 
        } else {
            sum[i] = number1Array[i] + number2Array[i] + carry;
            carry = 0;
        }
    }
    if (number1Array[0] + number2Array[0] + carry >= 2){
        sum.unshift(1);
    }
    console.log(sum.join(''));
}

sumBinary("11110", "10")

function inverse (binaryNumber) {
    let result = [];
    for (let i = 0; i <= binaryNumber.length - 1; i++) {
        if (binaryNumber.charAt(i) === "1") {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    console.log(result.join(""));
}

inverse ("1010");

function twosComplement(str)
{
    let complement='';
    let inversestr='';
    inversestr=inverse(str);
    complement=sumBinary(inversestr, '1');
    console.log(complement);
}

twosComplement("10110");
