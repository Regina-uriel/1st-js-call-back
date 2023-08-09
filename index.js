

//1. 
function multiplyByTwo(number, callback) {
  const result = number * 2;
  callback(result);
}

multiplyByTwo(5, (result) => {
  console.log("Result:", result);
});


//2. 
function filterEvenNumbers(array, callback) {
  const filteredArray = array.filter((number) => callback(number));
  return filteredArray;
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(numbers, (number) => number % 2 === 0);
console.log("Even numbers:", evenNumbers);


//3. 
function calculateSum(num1, num2, callback) {
  const sum = callback(num1, num2);
  console.log("Sum:", sum);
}

calculateSum(5, 3, (num1, num2) => num1 + num2);


//4. 
function convertToUpperCase(array, callback) {
  const updatedArray = array.map((string) => callback(string));
  return updatedArray;
}

const strings = ["hello", "world"];
const uppercaseStrings = convertToUpperCase(strings, (string) => string.toUpperCase());
console.log("Uppercase strings:", uppercaseStrings);


//5. 
function doMathOperation(num1, num2, callback) {
  const result = callback(num1, num2);
  console.log("Result:", result);
}

doMathOperation(5, 3, (num1, num2) => num1 + num2); 
doMathOperation(5, 3, (num1, num2) => num1 - num2); 
doMathOperation(5, 3, (num1, num2) => num1 * num2); 


//Promises:
//1. 
function fetchData() {
  return new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      resolve(randomNumber);
    }, randomDelay * 1000);
  });
}

fetchData().then((randomNumber) => {
  console.log("Random number:", randomNumber);
});


//2. 
function fetchMultipleData(urls) {
  const promises = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  return Promise.all(promises);
}

const urls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
];

fetchMultipleData(urls).then((data) => {
  console.log("Fetched data:", data);
});


//3. 
async function calculateSum(num1, num2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sum = num1 + num2;
      resolve(sum);
    }, 2000);
  });
}

async function calculateAndPrintSum() {
  const sum = await calculateSum(5, 3);
  console.log("Sum:", sum);
}

calculateAndPrintSum();


//4. 
async function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { name: "John", age: 25 };
      resolve(user);
    }, 2000);
  });
}

async function fetchAndPrintUserData() {
  const userData = await getUserData();
  console.log("User data:", userData);
}

fetchAndPrintUserData();


//5. 
async function uploadFiles(files) 

// 4. 
function uploadFile(file) {
  return new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      resolve("File uploaded successfully!");
    }, randomDelay * 1000);
  });
}

// 5.
function waitForUserInput() {
  return new Promise((resolve) => {
    const button = document.getElementById("myButton"); // Assuming there is a button with id "myButton"
    button.addEventListener("click", () => {
      resolve();
    });
  });
}


// 1.
function getData() 
  return new Promise(resolve)
    randomDelay = Math.floor(Math.random() * 5) + 1;
    setTimeout() 
 randomNumber = Math.floo
function fetchData() {
  return new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      resolve(randomNumber);
    }, randomDelay);
  });
}

// Usage:
fetchData().then((data) => {
  console.log("Fetched Data:", data);
});