// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

const names = 'Shovon';
const booleanType = true;
const number = 78;

// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 

let chagableVariable = 100;
chagableVariable = 200;
console.log(chagableVariable);

const unchangableVariable = 500;
// unchangableVariable = 1000;   not changable
// console.log(unchangableVariable);   not changable

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

const num1 = 100;
const num2 = 50;
const sum = num1 + num2;
console.log(sum);

const sub = num1 - num2;
console.log(sub);

const mul = num1 * num2;
console.log(mul);

const divi = num1 / num2;
console.log(divi);

const rem = num1 % num2;
console.log(rem);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

const number1 = 10;
const number2 = 5;

if(number1 < number2){
  console.log('Number1 is smaller');
} else {
  console.log('Number2 is smaller');
}

if(number1 > number2){
  console.log('Number1 is larger');
} else {
  console.log('Number2 is larger');
}

if(number1 != number2){
  console.log('Number1 & Number2 is not equal');
} else {
  console.log('Number1 & Number2 is equal');
}

if(number1 == number2){
  console.log('Number1 & Number2 is equal');
} else {
  console.log('Number1 & Number2 is not equal');
}

if(number1 <= number2){
  console.log('Number1 is equal or less than Number2');
} else {
  console.log('Number1 is not equal or less than Number2');
}

if(number1 >= number2){
  console.log('Number1 is equal or grater than Number2');
} else {
  console.log('Number1 is not equal or grater than Number2');
}


// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

let age = 20;
let height = 6;
if(age >= 20 && height >= 6){
  console.log('You attend the game');
}

age = 21;
height = 5;
if(age >= 20 || height >= 6){
  console.log('You also attend the game');
}


// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

const weight = 65;
if(weight >= 60){
  console.log('Your weight is so accurate');
} else {
  console.log('You are under weight');
}


// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

let oddNumber = 7;

while(oddNumber <= 19){
  if(oddNumber % 2 == 1){
    console.log(oddNumber);
  }
  oddNumber++;
}

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

let namesArr = ['shovon', 'shormi', 'somic', 'tumi', 'ami'];

console.log(namesArr.length);

namesArr[3] = 'jaan';
console.log(namesArr);

namesArr.push('you', 'amra')
console.log(namesArr);

namesArr.pop();
console.log(namesArr);


// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

const newArry = ['a', 'b', 'c', 'd', 'e', 'f'];

for(let i = 0; i < newArry.length; i++){
  console.log(newArry[i]);
}


// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

const numArray = [10, 20, 56, 83, 12, 100, 0, 88];

let newArr = [];
function largeArray(numArray){
for(let i = 0; i < numArray.length; i++){
  let addArr = numArray[i]; 
  if(addArr > 80){
    newArr.push(addArr);
   }
  }
  return newArr;
}

const largerNumber = largeArray(numArray);
console.log(largerNumber);


// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

function multi3(x,y,z){
  let result = x * y * z;
  return result;
}

const output = multi3(2,3,4);
console.log(output);


// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

let phone = {
  name: 'samsung',
  color: 'black',
  camera: '8mp',
  ram: '8gb',
  baterry: '1600amp'
};

phone['ram'] = '16gb';
console.log(phone);