// Mild
var number = 40

if(number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Medium
var medium = 30

if(medium % 3 === 0 && medium % 5 == 0) {
  console.log("FizzBuzz");
} else if(medium % 3 === 0) {
  console.log("Fizz");
} else if(medium % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(medium);
}

// Spicy
goodDrivingRecord = true
isOver25 = true

if(goodDrivingRecord === true && isOver25 === true) {
  console.log("You've earned a discount.");
} else if(goodDrivingRecord === true || isOver25 === true) {
  console.log("You must pay full price.");
} else {
  console.log("Someone else must sign for the rental.")
}
