// problem-1:Count the number of all zero

var count = 0;
function count_zero(input){
  for(var i = 0; i <= number.length; i++){
    if(number[i] != 0){
    continue;
    }
    count++;
    } 
  return count;
}
var number = [1, 0, 1, 0, 0, 1, 0];
count_zero(number);
console.log("Total number of 0's:", count);

// Problem-2:Find the area of a rectangle

function recArea(a,b){
  var area = a * b;
  return area;
}

var output = recArea(10,30);
console.log('Area of a rectangle:', output);


// Problem-3: Find Largest number using loop:
function numbersArray(inputNumbers){
  let largestNo = inputNumbers[0];
  for(var i = 0; i < inputNumbers.length; i++){
    const index = i;
    const element = largestNo[index];
    if(element > largestNo) {
         largestNo = element;
    }
  }
  return largestNo;
}
const inputNumbers = [190, 158, 128, 100, 239];
var largestNo = numbersArray(inputNumbers);
console.log('Largest number is: ', largestNo);


// Problem-4: Find Smallest number using loop:



// Problem-3:Find the second largest
/**
 * First method using reserve word:*/
var numbers = [12, 25, 10, 86, 102, 83];

var assendingNo = numbers.sort();
console.log(assendingNo);
var desendingNo = numbers.reverse();
console.log(desendingNo);
var secondMaxNo = numbers[1];
console.log(secondMaxNo);

/**
 * Second method using loop:*/


