function foundDuplicate(numbers) {
    let allSet = new Set();
    let duplicate = [];
  
    for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      if (allSet.has(number)) {
        duplicate.push(number);
      } else {
        allSet.add(number);
      }
    }
  
    return duplicate;
  }
 
  let numbers = [1, 3, 3, 4, 8, 4, 9, 2, 10, 10];
  console.log("Elementos duplicados: " + foundDuplicate(numbers).join(", "));
  