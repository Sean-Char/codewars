// Get the Middle Character
function getMiddle(s){
  let oddMiddle = ((s.length + 1) / 2) - 1
  let evenMiddle = s.length / 2
  
  if (s.length % 2 ===0) {
    return `${s[evenMiddle -1]}${s[evenMiddle]}`
  }
  return `${s[oddMiddle]}`
}
/* 
even - "test" = "es"
odd - "testing" = "t"
*/


// Square Every Digit
function squareDigits(num){
  let strNum = num.toString()
  let arrNum = strNum.split('')
  let r = arrNum.map(num => Number(num * num)).join('')
  return Number(r)
}
/* 
9*9 = 81
1*1 = 1
*/


// Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Is it a number?
function isDigit(s) {
  return s==parseFloat(s);
}


// Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  return pontoonDistance * sharkSpeed < youSpeed * sharkDistance * (dolphin ? 2 : 1) ? "Alive!" : "Shark Bait!"
}

// Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return ((blueStart - bluePulled)/(blueStart + redStart - bluePulled - redPulled))
}


// Multiple of index
function multipleOfIndex(array) {
  return array.filter((val, idx) => val % idx === 0)
}
// [22, -6, 32, 82, 9, 25] => [-6, 32, 25]
//[68, -1, 1, -7, 10, 10] => [-1, 10]


// Classic Hello World
class Solution{
  static main() {
    console.log("Hello World!")
  }
}


// repeatIt
var repeatIt = function(str, n) {
  if(typeof str !== "string") {
    return "Not a string"
  }
  return str.repeat(n)
}


// Find the position!
function position(letter){
  const num = parseInt(letter, 36) - 9
  return `Position of alphabet: ${num}`
}


// Training JS #5: Basic data types--Object
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


// How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
  return s.reduce((steps, day) => steps.concat(day))
          .reduce((sum, count) => sum + count) * 20
}


// Tip Calculator
const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};
const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();
  
  return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};


// Take the Derivative
function derive(coefficient,exponent) {
  let num1 = coefficient * exponent
  let num2 = exponent - 1
  return `${num1}x^${num2}`
}


// Add Length
function addLength(str) {
  return str.split(" ").map(v => `${v} ${v.length}`)
}


// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
  for (var i=0;i<n;i++) {
    s=s.replace("!","")
  } 
  return s;
}


// Grasshopper - Array Mean
var findAverage = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur)
  return sum / nums.length
}


// Regexp Basics - is it a digit?
String.prototype.digit = function() {
  return /^[0-9]$/gi.test(this)
};


// Find Multiples of a Number
function findMultiples(integer, limit) {
  let arr = []
  for (let i = 1; i * integer <= limit; i++) {
    arr.push(i * integer)
  }
  return arr
}


// Training JS #2: Basic data types--Number
var v1=50,v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v4   //set number value to a
  var b=v2   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5  //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3   //set number value to b
  return a%b;
}

// Welcome to the City
function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}


// Remove First and Last Character Part Two
function array(arr){
  let numArr = arr.split(",")
  numArr.pop()
  numArr.shift()
  return numArr.join(" ") || null
}


// Formatting decimal places #0
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}


// Thinkful - Number Drills: Pixelart planning
function isDivisible(wallLength, pixelSize){
  return wallLength%pixelSize===0;
}


// Bin to Decimal
function binToDec(bin){
  return parseInt(bin, 2)
}


/*  Enumerable Magic #3 - Does My List Include This?
    concept: check if a value is in the array, return t or f
    use the Array helper function includes()
*/
function include(arr, item){
  return arr.includes(item)
}


// Grasshopper - Variable Assignment Debug
var a = "dev"
var b = "Lab"

var name = a + b


// Is it a palindrome?
/*  concept:  check if the string reflect itself (Palindrome)
    
    take the string and lowercase it
    turn the string into an array 
    use the Array function|methods - reverse() and join() to turn it
    to a string again
    compare it to the original
    
*/
function isPalindrome(x) {
  let str = x.toLowerCase().split("").reverse().join("")
	console.log(str)
  return x.toLowerCase() === str
}


// Exclamation marks series #1: Remove a exclamation mark from the end of string
function remove(s){
  return s.replace(/!$/gi, "")
}


// Basic subclasses - Adam and Eve
class God{
  /**
   * @returns Human[]
   */
    static create(){
      return [new Man(), new Woman()]
    }
  }
  
  class Human {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Man extends Human {
    constructor(name) {
      super(name) 
    }
  }
  
  class Woman extends Human {
    constructor(name) {
      super(name)
    }
}


// Kata Example Twist
let websites = new Array(1000).fill('codewars')


// Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  if (sperm === 'XY') {
    return "Congratulations! You're going to have a son."
  }
  return "Congratulations! You're going to have a daughter."
}


// Basic Training: Add item to an Array
websites.push("codewars")


// Convert to Binary
function toBinary(n){
  return parseInt(n.toString(2))
}


// Mr. Freeze
Object.freeze(MrFreeze)


// Color Ghost
var Ghost = function() {
  var colors = ["white", "yellow", "purple", "red"];
  var colorIndex = Math.floor(Math.random() * (colors.length));
  this.color = colors[colorIndex];
};


// Smallest unused ID (Missing number)
function nextId(ids){
  let num = 0
  // validate if num exist 
  while (ids.includes(num)) {
    // if true add 1 to the number and loop again
    num += 1
  }
  // if false return the number
  return num
}


// To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}


// 5 without numbers !!
function unusualFive() {
  let i = "hello"
  return i.length
}


// Grasshopper - Terminal game combat function
function combat(health, damage) {
  let newHealth = health - damage
  if (newHealth < 0 ) {
    return 0
  }
  return newHealth
}


// Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  let total = 0
  if (n<5) {
    total += n * 100
  }
  else if (n>=5 && n<10) {
    total += n * 95
  }
  else if (n>=10) {
    total += n * 90
  }
  return total
}


// Pre-FizzBuzz Workout #1
function preFizz(n) {
  let result = []
  for(let i = 1; i <= n; i++ ) {
    result.push(i)
  }
  return result
}


// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
  return s.replace(/a|e|i|o|u/gi, "!")
}


// Grasshopper - Function syntax debugging
function main (verb, noun) {
  return verb + noun
}


// Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
  return arr.slice(0, n)
}


// Gravity Flip
const flip=(d, a)=>{
  if(d === 'R') return a.sort((a,b)=>a-b);
  if(d === 'L') return a.sort((a,b)=>b-a);
}
const flip=(d, a)=>{
  if (d === "R") {
    return a.sort((a,b) => a - b)
  }
  return a.sort((a,b) => b - a)
}

// Hex to Decimal
function hexToDec(hexString){
  return parseInt(hexString, 16)
}


// Lario and Muigi Pipe Problem
function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}


// Capitalization and Mutability
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}


// Training JS #1: create your first JS function and print "Helloworld!"
function helloWorld() {
  var str = "Hello World!"
  console.log(str)
}


// L1: Bartender, drinks!
const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}
function getDrinkByProfession(param){
return drinks[param.toLowerCase()] || "Beer"
}

function getDrinkByProfession(param){
  let strArr = param.toLowerCase().split(" ")
  const result = strArr.map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(" ")

  if (result === "Jabroni") {
    return "Patron Tequila"
  }
  else if (result === "School Counselor") {
    return "Anything with Alcohol"
  }
  else if (result === "Programmer") {
    return "Hipster Craft Beer"
  }
  else if (result === "Bike Gang Member") {
    return "Moonshine"
  }
  else if (result === "Politician") {
    return "Your tax dollars"
  }
  else if (result === "Rapper") {
    return "Cristal"
  }
  return "Beer"
}


// Student's Final Grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100
  }
  if (exam > 75 && projects >= 5) {
    return 90
  } 
  if (exam > 50 && projects >= 2) {
    return 75
  }
    return 0
}


// Plural
function plural(n) {
  return n !== 1
}
function plural(n) {
  return n === 0 || n < 1 || n > 1 ? true : false
}


// Sleigh Authentication
class Sleigh {
  authenticate(name, password) {
    return name === 'Santa Claus' && password === 'Ho Ho Ho!'
  }
}

function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}
Sleigh.prototype.authenticate = function(name, password) {
  return this.name == name && this.password == password;
}


// No zeros for heros
function noBoringZeros(n) {
  let strNum = n.toString()
  return Number(strNum.replace(/0+$/, ''))
}


// Check the exam
function checkExam(array1, array2) {
  let points = 0
  
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === "") {
      points += 0
    }
    else if (array2[i] === array1[i]) {
      points += 4
    }
    else {
      points += -1
    }
  }
  return points > 0 ? points : 0
}


// Reverse List Order
function reverseList(list) {
  return list.reverse()
}


// Surface Area and Volume of a Box
function getSize(width, height, depth) {
  let volume = width * height * depth
  let area = 2*(height * width) + 2*(height * depth) + 2*(width*depth)
  return [area, volume]
}


// A wolf in sheep's clothing
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return `Pls go away and stop eating my sheep`
  }
  else {
    let index = queue.findIndex(v => v === "wolf")
    return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`
  }
}


// Remove duplicates from list
function distinct(a) {
  return [...new Set(a)]
}


// Hello, Name or World!
function hello(name) {
  if (name === "" || name === null || name === undefined) {
    return "Hello, World!"
  }
  let str = name.toLowerCase()
  return `Hello, ${str.charAt(0).toUpperCase() + str.slice(1)}!`;
}



// Swap Values
function swapValues(args) {
  let temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}


// Alan Partridge II - Apple Turnover
function apple(x){
  let myNum = Number(x)
  if (Math.pow(myNum, 2) > 1000) {
    return "It's hotter than the sun!!"
  }
  else {
    return "Help yourself to a honeycomb Yorkie for the glovebox."
  }
}


// get character from ASCII Value
function getChar(c){
  return String.fromCharCode(c)
}


// Well of Ideas - Easy Version
function well(x){
  let goodCount = 0
  for (let ideas of x) {
    if (ideas === 'good') {
      goodCount++
    }
  }
  
  if (goodCount > 0 && goodCount <= 2) {
    return 'Publish!'
  }
  else if (goodCount > 2) {
    return 'I smell a series!'
  }
  else {
    return 'Fail!'
  }
}


// Powers of 2
function powersOfTwo(n){
  let results = []
  for (let i = 0; i <= n; i++) {
    results.push(Math.pow(2, i))
  }
  return results
}


// Grasshopper - Check for factor
function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false
}


// Palindrome Strings
function isPalindrome(line) {
  return String(line) === String(line).split('').reverse().join('')
}


// The 'if' function
function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}


// Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
  let calDiscount = (normPrice * discount) / 100
  let bottles = hol / calDiscount
  return Math.floor(bottles)
}


// The Wide-Mouthed frog!
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" :  "wide"
}


// Sum The Strings
function sumStr(a,b) {
  return (Number(a) + Number(b)).toString()
}


// Drink about
function peopleWithAgeDrink(age) {
  let drink = 'drink'
  if(age < 14)
    drink += ' toddy';
  else if(age < 18)
    drink += ' coke'
  else if(age < 21)
    drink += ' beer';
  else if(age => 21)
    drink += ' whisky';

  return drink;
}


// What's the real floor?
function getRealFloor(n) {
  if (n === 0) return n
  else if (n < 0) return n
  else if (n < 13) return n - 1
  else if (n >= 13) return n - 2
}


// Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird))
}


// Grasshopper - Terminal game move function
function move (position, roll) {
  // return the new position
  return position += roll * 2
}


// Filling an array (part 1)
function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}


// Sort and Star
function twoSort(s) {
  let revStr = s.sort()
  let x = revStr[0]
  return x.split('').join('***')
}


// Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  return a !== b
}


// All Star Code Challenge #18
function strCount(str, letter){  
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++
    }
  }
  return count || 0
}


// Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}


// Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears, dogYears;
  if (humanYears === 1) return [1, 15, 15];
  else if (humanYears === 2) return [2, 24, 24];
  else {
    catYears = 4 * (humanYears - 2) + 24;
    dogYears = 5 * (humanYears - 2) + 24;
    return [humanYears, catYears, dogYears];
  }
}


// Squash the bugs - return the longest string from the string array
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (let i = 0; i < spl.length; i++) {

    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
  return longest
}


// Difference of Volumes of Cuboids
function findDifference(a, b) {
  let x = a.reduce((acc, cur) => acc * cur)
  let y = b.reduce((acc, cur) => acc * cur)
  return Math.abs(x-y)
}


// Grasshopper - Debug sayHello
function sayHello(name) {
  return `Hello, ${name}`
}


// Correct the mistakes of the character recognition software
function correct(string)
{
  let char = {
    5: 'S',
    0: 'O',
    1: 'I'
  }
  
  let strArr = string.split("")
  for (let i = 0; i < strArr.length; i++){
    if (strArr[i] === "5") {
      strArr[i] = char[5]
    }
    else if (strArr[i] === "0") {
      strArr[i] = char[0]
    }
    else if (strArr[i] === "1") {
      strArr[i] = char[1]
    }
  }
  return strArr.join("")
}


// I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  let phrase = ['I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'] 
  return phrase[(nbPetals-1) % 6]
}


// Is it even?
function testEven(n) {
  return n % 2 === 0 ? true : false
}


// Regular Ball Super Ball
class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}


// Switch it Up!
function switchItUp(number){
  return nums = ({
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five", 
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
  })[number]
}


// Watermelon
function divide(weight){
  return weight > 2 && weight % 2 === 0
}


// How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0
}


// Keep up the hoop
function hoopCount (n) {
  return n>=10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}


// The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


// Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  if(current === "green"){
    return "yellow"
  }
  else if(current === "yellow") {
    return "red"
  }
  else if(current === "red") {
    return "green"
  }
}


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
        return '??' + salary * 10
    }
    else {
        return '??' + salary
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