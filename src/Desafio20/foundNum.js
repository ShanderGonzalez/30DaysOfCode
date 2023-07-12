
const sequence = [7, 8, 10 , 11, 12];

function arithmeticSum (sequence) {
    let sum = sequence[0] + sequence[sequence.length - 1];
    let sizeOriginal = sequence.length + 1;
    return sum * (sizeOriginal/2);
}

let sequenceSum = sequence.reduce((total, valor) => total + valor, 0);
let foundNumber = arithmeticSum(sequence) - sequenceSum;

console.log("Número faltante en la secuencia es:", foundNumber);
  
  