// Create function here 
const numberDigits = x => {
  if (x < 0) {
    return `The number is : ${x}`;
  } else if (x <= 9) {
    return "One digits";
  } else if (x <= 99) {
    return "Two digits";
  } else {
    return `The number is : ${x}`;
  }
}
console.log(numberDigits(-1));
console.log(numberDigits(1));
console.log(numberDigits(99));
console.log(numberDigits(100));
