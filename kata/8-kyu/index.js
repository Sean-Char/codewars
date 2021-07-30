// Convert a Boolean to a String
function booleanToString(b){
    return b === true ? 'true' : 'false'
}


// Is he gonna survive?
function hero(bullets, dragons){
    return bullets >= dragons * 2
}


// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
      return []
    }
    
    let count = 0
    let sum  = 0
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count++
      }
      else 
        sum += input[i]
    }
    return [count , sum] 
}


// Beginner Series #2 Clock
function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000;
  }


// Invert values
function invert(array) {
    return array.map(value => value * -1)
}


// You Can't Code Under Pressure #1
function doubleInteger(i) {
    return i * 2;
}

// Beginner - Lost Without a Map
function maps(x) {
    return x.map(v => v * 2)
}
   

// Abbreviate a Two Word Name
function abbrevName(name){
    const nameArr = name.split(" ")
    const firstChar = nameArr[0].charAt(0).toUpperCase()
    const lastChar = nameArr[1].charAt(0).toUpperCase()
  
    return `${firstChar}.${lastChar}`
  }


// Returning Strings
function greet(name){
    return `Hello, ${name} how are you doing today?`
}


// Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true
    }
    else {
      return false
    }
} 


// Century From Year
function litres(time) {
    return Math.floor(time/2)
}


// Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = args[0]
      for(let i = 1; i < args.length; i++) {
        if (args[i] < min ) {
          min = args[i]
        }
      }
      return min
    }
}


// Remove First and Last Character
function removeChar(str){
    let processStr = str.split("")
     processStr.pop()
     processStr.shift()
     
     return processStr.join("")
   
}


// Multiplication table for number
let myNums = [1,2,3,4,5,6,7,8,9,10]
function multiTable(number) {
  return myNums.map(item => {
    return `${item} * ${number} = ${item * number}`
  }).join('\n')
}


// Reversed Strings
function solution(str){
    return str.split("").reverse().join("")
}


// Remove String Spaces
function noSpace(x){
    return x.split(" ").join("")
}  


// Total amount of points
function points(games) {
    var points = 0;
    for (var i = 0; i < games.length; i++) {
      if (games[i][0] > games[i][2]) {
         points = points + 3;
      }
      else if (games[i][0] === games[i][2]) { 
         points = points + 1;
      }
      else {
         points;
      }
    }
    return points;
}


// SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
    let aTotal = 0;
    let bTotal = 0;
    for (var i = 0; i < a.length; i++) {
      aTotal += a[i] * a[i]
    }
    for (var j = 0; j < b.length; j++) {
      bTotal += b[j] * b[j] * b[j]
    }
    return aTotal > bTotal;
}


// Classy Extentions
class Cat extends Animal {
    speak() {
      return this.name + " meows.";
    }
}


// Name Shuffler
function nameShuffler(str) {
    return str.split(' ').reverse().join(' ');
}


// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2
    }
    else if (operation === '-') {
        return value1 - value2
    }
    else if (operation === '*') {
        return value1 * value2
    } else {
        return value1 / value2
    }
}


// Grasshopper - Summation
var summation = function (num) {
    var count = 0
    for ( var i = 0; i <= num ; i++) {
       count = count + i
    }  
    return count
}


// Double Char
function doubleChar(str) {
    var splitStr = str.split('')
    var repeatWords = []
    for(var i = 0; i < splitStr.length; i++) {
      repeatWords.push(splitStr[i].repeat(2))
    }  
    return repeatWords.join('')
}


// Count by X
function countBy(x, n) {
    var z = [];
    var y = x * n;
    for (var i = 1; i <= y; i++) {
      if ( i % x === 0 ) {
        z.push(i)
      }
      
    }
    return z;
}


// Function 1 - hello world
function greet() {
    return "hello world!"
}


// Simple validation of a username with regex
function validateUsr(username) {
    return /^[a-z_0-9]{4,16}$/g.test(username) 
}


// A Needle in the Haystack
function findNeedle(haystack) {
    for (var i = 0; i < haystack.length; i++) {
      if( haystack.indexOf('needle')){
        return 'found the needle at position ' + haystack.indexOf('needle')
      }
    }
}


// Sum of positive
function positiveSum(arr) {
    var sum = 0
    var negatives = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            negatives.push(arr[i])
        } else {
            sum += arr[i]  
        }
    }
    return sum
}


// Convert number to reversed array of digits
function digitize(n) {
    return String(n).split("").reverse().map(Number);
}


// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    return name.toLowerCase().charAt(0) === 'r'? name + " plays banjo" : name + " does not play banjo"    
}


// String repeat
function repeatStr (n, s) {
    return s.repeat(n) 
}


// Regex count lowercase letters
function lowercaseCount(str){
    return str.replace(/[^a-z]/g,'').length  
}


// Convert a String to a Number!
var stringToNumber = function(str){
    return parseInt(str)
}


// Return Negative
function makeNegative(num) {
    return num < 0 ? num : num * -1
}


// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ) {
    return bool? 'Yes': 'No'
}


// Square(n) Sum
function squareSum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 2)
    }
    return sum
}


// Counting sheep...
function countSheeps(arrayOfSheep) {
    var count = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
       if (arrayOfSheep[i] === true) {
         count ++
       }
    }
    return count
}


// Convert a Number to a String!
function numberToString(num) {
    return num.toString()
}

// Opposite number
function opposite(number) {
    return number * -1
}


// Contamination #1 -String-
function contamination(text, char){
    if(text === 0 || char === 0){
      return '';
    } else {
      return text.replace(/./g, char)
    }
}


// Word Count
function countWords(str) {
    if(!str){
      return 0
    }
    var temp = str.match(/[a-z\d]{1,}(['-][a-z]{1,})?/gi)
    if(!temp){
      return 0
    }
    return temp.length
}


// Semi-Optional
function wrap(value) {
    return value = {value}
}


// Even or Odd
function even_or_odd(number) {
    return number % 2 === 0 ? 'Even': 'Odd'
}


// String cleaning
function stringClean(s) {
    var desired = s.replace(/[0-9]/g, '')  
    return desired
}



// Removing Elements
function removeEveryOther(arr){
    return arr.filter((c, i) => {
        return i % 2 === 0
    })
}


// Simple multiplication
function simpleMultiplication(num){
    if (num % 2 === 0) {
        return num * 8
    }
    else 
        return num * 9
}


// Grasshopper - Basic Function Fixer
function addFive(num) {
    return total = num + 5 
}


// Welcome!
var languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso"
    }
    
    
function greet(language) {
    if(languages[language]){
        return languages[language]
    }
    else {
        return languages['english']
    }
}


// Parse nice int from char problem
function getAge(inputString){
    return parseInt(inputString)
}


// Do I get a bonus?
function bonusTime(salary, bonus) {
    if (bonus === true) {
        return '£' + salary * 10
    }
    else {
        return '£' + salary
    }
}


// FIXME: Replace all dots
var replaceDots = function(str) {
    return str.split('.').join('-')
}


// Jenny's secret message
function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!";
    }
    else {
        return "Hello, " + name + "!";
    }
}


// Simple Fun #261: Whose Move
function whoseMove(lastPlayer, win) {
    if (lastPlayer === "black" && win === false) {
        return "white"
    } 
    else if(lastPlayer === "white" && win === true) {
        return "white"
    } 
    else {
        return "black"
    }  
}


// Unfinished Loop - Bug Fixing #1
function createArray(number){
    var newArray = [];
    for(var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}


// Multiply
function multiply(a, b) {
    return a * b;
}