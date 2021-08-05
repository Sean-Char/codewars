// N-th Power
function index(array, n){
  for (let i = 0; i < array.length; i++) {
    if (n < array.length) {
      return Math.pow(array[n], n)
    }
  }
  return -1
}
function index(array, n){
  return n < array.length ? Math.pow(array[n], n) : -1
}


// Area or Perimeter
const areaOrPerimeter = function(l , w) {
  if (l === w) return l * w
  return 2 * (l + w)
};

// Function 2 - squaring an argument
const square = (num) => {
  return Math.pow(num,2)
}


// Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}


// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
  return this.split("").map(val => val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()).join("")
}


// Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {
// side A |  side B
    rock: "scissors",
    paper: "rock", 
    scissors: "paper"};
  // bracket notation takes in a string for objects to access the value
  console.log(rules["scissors"]) // paper
  console.log(rules.rock) // scissors

  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper') {
     return 'Player 1 won!'
  }
  else if(p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!'
  }
  else if(p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!'
  }
  else if(p2 === 'scissors' && p1 === 'paper') {
     return 'Player 2 won!'
  }
  else if(p2 === 'paper' && p1 === 'rock') {
    return 'Player 2 won!'
  }
  else if(p2 === 'rock' && p1 === 'scissors') {
    return 'Player 2 won!'
  }
  else {
    return 'Draw!'
  }
};


// Third Angle of a Triangle
function otherAngle(a, b) {
    return 180 - (a + b)
}


// Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


// Expressions Matter
function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))
}
function expressionMatter(a, b, c) {
    let result1
    let result2
    let result3
    let result4
    let result5
    
    result1 = a * (b + c)
    result2 = a * b * c
    result3 = a + b * c
    result4 = (a + b) * c
    result5 = a + b + c
    
    return Math.max(result1, result2, result3, result4, result5)
}


// Grasshopper - Messi Goals
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals


// Will there be enough space?
function enough(cap, on, wait) {
    return Math.max(wait + on - cap,0)
}


// Beginner Series #4 Cockroach
function cockroachSpeed(s) {
    return cal = Math.floor(s * 27.7778)
}


// Opposites Attract
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2
}


// Grasshopper - Grade book
function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3
    
    if (score >= 90) {
      return 'A'
    }
    else if (score >= 80) {
      return 'B'
    }
    else if (score >= 70) {
      return 'C'
    }
    else if (score >= 60) {
      return 'D'
    }
    else {
      return 'F'
    }
}


// If you can't sleep, just count sheep!!
var countSheep = function (num){
    let string = ''
    for (let i = 1; i <= num; i++) {
      string += `${i} sheep...`
    }
    return string
}


// Convert a string to an array
function stringToArray(string){
    return string.split(" ")
}


// Volume of a Cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
}


// L1: Set Alarm
function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
}


// Quarter of the year
const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
}


// Sentence Smash
function smash (words) {
    "use strict";
  return words.join(" ")
    
};


// Function 3 - multiplying two numbers
function multiply(a , b) {
    return a * b
}


// Sum Mixed Array
function sumMix(x){
    return x.reduce((a,c) => a + parseInt(c), 0)
}


//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    let avg = classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length
    return yourPoints > avg ? true : false
}


// Transportation on vacation
function rentalCarCost(d) {
    let costPerDay = 40
    let totalCost = costPerDay * d
    if (d >= 7) {
          totalCost -= 50
      }
      else if (d >= 3) {
          totalCost -= 20
      }
      return totalCost
}


// Remove exclamation marks
function removeExclamationMarks(s) {
    return s.split("!").join("")
}


// Grasshopper - Personalized Message
function greet (name, owner) {
    if(name === owner) {
      return 'Hello boss'
    }
    return 'Hello guest'
}


// Sum without highest and lowest number
function sumArray(array) {
    if (!array) {
          return 0
    }
    let ordArr = array.sort((a,b) => a-b)
    ordArr.shift()
    ordArr.pop()
    let sum = 0
    for (let i = 0; i < ordArr.length; i++) {
      sum += ordArr[i]
    }
    return sum
}


// Find the first non-consecutive number
function firstNonConsecutive (arr) {   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}


// Get Planet Name By ID
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
}

// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let cal = mpg * fuelLeft
    return cal >= distanceToPump ? true : false
};
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft
};
 

// Beginner - Reduce but Grow
function grow(x){
    return x.reduce((acc, curr) => acc * curr)
}


// Array plus array
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, c) => a + c, 0)
}


// DNA to RNA Conversion
function DNAtoRNA(dna) {
    let strArr = dna.split("")
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === "T") {
        strArr[i] = "U"
      }
    }
    return strArr.join("")
}
function DNAtoRNA(dna) {
    return dna.replace(/T/gi, "U")
}


// You only need one - Beginner
function check(a, x) {
    return a.includes(x)
}


// MakeUpperCase
function makeUpperCase(str) {
    return str.toUpperCase()
}


// Find Maximum and Minimum Values of a List
var min = function(list){
    return Math.min(...list) // 
}

var max = function(list){
    return Math.max(...list)
}
//max([4,6,2,1,9,63,-134,566]) returns 566
//min([-52, 56, 30, 29, -54, 0, -110]) returns -110


// Beginner Series #1 School Paperwork
function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m
}

// Reversed sequence
const reverseSeq = n => {
    let result = []
    let start = n
    for (let i = start; i > 0; i--) {
      result.push(i)
    }
    return result
};


// Array plus array
function arrayPlusArray(arr1, arr2) {
    let x = arr1.reduce((a, c) => a + c, 0)
    let y = arr2.reduce((a, c) => a + c, 0)
    return x + y
}
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, c) => a + c, 0)
}


// Fake Binary
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
function fakeBin(x){
    let result = []
    let numArr = x.split("")
    for (let i = 0; i < numArr.length; i++) {
      let parsNum = parseInt(numArr[i])
      if (parsNum < 5) {
        result.push(0)
      } 
      else if (parsNum > 0) {
        result.push(1)
      }
    }
    return result.join("")
}


// Calculate BMI
function bmi(weight, height) {
    let calBMI = (weight) / (height * height)
    if (calBMI <= 18.5 ) {
      return "Underweight";
    }
    else if (calBMI <= 25.0) {
      return "Normal";
    }
    else if (calBMI <= 30.0 ) {
      return "Overweight";
    }
    else if (calBMI > 30 ) {
      return "Obese";
    }
}

// Sum Arrays
function sum (numbers) {
    return numbers.reduce((a, c) => a + c, 0)
};


// Count the Monkeys!
function monkeyCount(n) {
    let count = 0
    let result = []
    for (let i = 1; i <= n; i++) {
      result.push(count =+ i)
    }
    return result
}


//Calculate average
function find_average(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum / array.length
}


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