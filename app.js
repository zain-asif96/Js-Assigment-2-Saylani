// Chapter 21 -25 Task No 1 //

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName + " , Have a good day!");

// Chapter 21 -25 Task No 2 //

// var mobilePhoneModel = prompt("Enter your favourite mobile phone model:");
// var lengthOfModel = mobilePhoneModel.length;

// document.write("My favourite phone is: " + mobilePhoneModel);
// document.write("<br />");
// document.write("Length of string: " + lengthOfModel);

// Chapter 21 -25 Task No 3 //

// var nationality = "Pakistani";
// var findIndexOfN = nationality.match(/n/gi).length;

// document.write("String: " + nationality);
// document.write("<br />");
// document.write("Index of 'n': " + findIndexOfN);

// Chapter 21 -25 Task No 4 //

// var helloWorld = "Hello World";
// var findLastIndex = helloWorld.lastIndexOf("l");

// document.write("String: " + helloWorld);
// document.write("<br />");
// document.write("Index of 'l': " + findLastIndex);

// Chapter 21 -25 Task No 5 //

// var nationality = "Pakistani";
// var findIndex = nationality.charAt(3);

// document.write("String: " + nationality);
// document.write("<br />");
// document.write("Character at index 3 : " + findIndex);

// Chapter 21 -25 Task No 6 //

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(lastName);
// alert("Welcome " + fullName + " , Have a good day!");

// Chapter 21 -25 Task No 7 //

// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder", "Islam");

// document.write("City: " + city);
// document.write("<br />");
// document.write("After Replacement: " + replaceCity);

// Chapter 21 -25 Task No 8 //

// var message =
//   "Ali and Sami are best friends. They play cricket and football together";
// var replaceWord = message.replace(/and/gi, "&");

// document.write("Before Replacement of 'And': " + message);
// document.write("<br />");
// document.write("Before Replacement of 'And': " + replaceWord);

// Chapter 21 -25 Task No 9 //

// var numberAsString = "472";
// var convertStringInNum = Number(numberAsString);

// document.write("Value: " + numberAsString);
// document.write("<br />");
// document.write("Type: String");
// document.write("<br />");
// document.write("Value: " + numberAsString);
// document.write("<br />");
// document.write("Type: Number");

// Chapter 21 -25 Task No 10 //

// var userInput = prompt("Enter any word you wantf it to be in capital letters:");
// var capitalLetters = userInput.toUpperCase();

// document.write("User Input: " + userInput);
// document.write("<br />");
// document.write("Upper Case: " + capitalLetters);

// Chapter 21 -25 Task No 11 //

// var userInput = prompt("Enter any word you wantf it to be in capital letters:");
// var lowerCaseUserInput = userInput.toLowerCase();
// var splitUserInput = userInput.split(" ");

// for (let i = 0; i < splitUserInput.length; i++) {
//   splitUserInput[i] =
//     splitUserInput[i].charAt(0).toUpperCase() + splitUserInput[i].slice(1);
// }

// var joinUserInput = splitUserInput.join(" ");

// // console.log(joinUserInput);

// document.write("User Input: " + userInput);
// document.write("<br />");
// document.write("Title Case: " + joinUserInput);

// Chapter 21 -25 Task No 12 //

// var decimalNum = 35.36;
// var convertInString = decimalNum.toString();
// var removeDecimal = convertInString.replace(".", "");

// document.write("Number: " + decimalNum);
// document.write("<br />");
// document.write("Result: " + removeDecimal);

// Chapter 21 -25 Task No 13 //

// var userInput = prompt("Enter a username: ");

// if (/^[a-zA-Z0-9- ]*$/.test(userInput) == false) {
//   alert("Please enter a valid username.");
// } else {
//   alert("Congrtulations! your username is valid.");
// }

// Chapter 21 -25 Task No 14 //

// var bakery = ["cake", "applepie", "cookie", "chips", "patties"];
// var searchItems = prompt("Welcome! What do you want to order?");
// var finalList = searchItems.toLowerCase();

// if (bakery.indexOf(finalList) !== -1) {
//   alert(
//     finalList +
//       " is available at index " +
//       bakery.indexOf(finalList) +
//       " in our bakery"
//   );
// } else {
//   alert("Sorry " + finalList + " is not available!");
// }

// Chapter 21 -25 Task No 15 //

// var userInput = prompt("Enter a password: ");
// var zeroIndex = userInput.charCodeAt(0);

// if (zeroIndex >= 48 && zeroIndex <= 57) {
//   alert("Please shouldnot start with a number");
// } else if (userInput.length !== 6) {
//   alert("Password must be atleast 6 characters long ");
// } else {
//   alert("Login Successful");
// }

// Chapter 21 -25 Task No 16 //

// var university = "University of Karachi";
// var convertStringInArray = university.split("");

// for (var i = 0; i < convertStringInArray.length; i++) {
//   document.write(convertStringInArray[i] + "<br />");
// }

// Chapter 21 -25 Task No 17 //

// var userInput = prompt("Enter any word: ");
// var lastCharInString = userInput.substr(-1);

// document.write("User Input: " + userInput);
// document.write("Last character of input: " + lastCharInString);
// document.write("<br />");

// Chapter 21 -25 Task No 18 //

// var sentence = "The quick brown fox jumps over the lazy dog.";
// var lowerCaseSent = sentence.toLowerCase();
// var occurenceOfpartWord = lowerCaseSent.match(/the/g).length;

// document.write("Text: " + sentence);
// document.write("<br />");
// document.write(
//   "There are " + occurenceOfpartWord + " occurences of the word 'the'."
// );

// Chapter 26 -30 Task No 1 //

// var userInput = prompt("Enter positive integer: (e.g 4.5621)");
// document.write("Number: " + userInput);
// document.write("<br />");

// var roundUserInput = Math.round(userInput);
// document.write("Roundoff value: " + roundUserInput);
// document.write("<br />");

// var floorUserInput = Math.floor(userInput);
// document.write("Floor value: " + floorUserInput);
// document.write("<br />");

// var ceilUserInput = Math.ceil(userInput);
// document.write("Ceil value: " + ceilUserInput);
// document.write("<br />");

// Chapter 26 -30 Task No 2 //

// var userInput = prompt("Enter negative integer: (e.g -4.5621)");
// document.write("Number: " + userInput);
// document.write("<br />");

// var roundUserInput = Math.round(userInput);
// document.write("Roundoff value: " + roundUserInput);
// document.write("<br />");

// var floorUserInput = Math.floor(userInput);
// document.write("Floor value: " + floorUserInput);
// document.write("<br />");

// var ceilUserInput = Math.ceil(userInput);
// document.write("Ceil value: " + ceilUserInput);
// document.write("<br />");

// Chapter 26 -30 Task No 3 //

// var numberOne = -81;
// var numberTwo = Math.abs(numberOne);
// var numberThree = 42;
// var numberFour = Math.abs(numberThree);

// document.write("The absolute value of " + numberOne + " is " + numberTwo);
// document.write("<br />");
// document.write("The absolute value of " + numberThree + " is " + numberFour);

// Chapter 26 -30 Task No 4 //

// var diceNumber = Math.floor(Math.random() * 10);
// document.write("Random dice number: " + diceNumber);

// Chapter 26 -30 Task No 5 //

// var flipCoin = Math.round(Math.random() * 2);
// document.write(flipCoin);
// document.write("<br />");
// if (flipCoin >= 2) {
//   document.write("Random coin value: Heads");
// } else {
//   document.write("Random coin value: Tails");
// }

// Chapter 26 -30 Task No 6 //

// var randomNumber = Math.round(Math.random() * 100);
// document.write("Random number between 1 and 100 is: " + randomNumber);

// Chapter 26 -30 Task No 7 //

// var userInput = prompt("Enter your weight in kg: ");
// var weight = parseInt(userInput);
// document.write("The weight of user is " + weight + " kilograms");

// Chapter 26 -30 Task No 8 //

// var randomNumber = Math.floor(Math.random() * 10 + 1);
// var userInput = prompt("Enter a number between 1 and 10: ");

// if (userInput == randomNumber) {
//   alert("Congratulations! You've guess the right number.");
// } else {
//   alert("Try Again!");
// }
