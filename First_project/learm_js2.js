function ourTrueOrFalse(isItTrue) {
    if (isItTrue)
    {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function testEqual(val)
{
    if (val < 10){
        return "Less than 10";
    }
    else if (val < 15)
    {
    return "Less than 15";
    }
    else{
        "Greater or equal to 15"
    }
}
//console.log(ourTrueOrFalse(true))
//console.log(testEqual(12))

function caseInSwitch(val){
    var answer = ""
    switch(val)
    {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "lambda";
            break;
        default:
            answer = "not found";
            break;
    }
    return answer;
}

function abTest(a, b)
{
    if (a < 0 || a < 0)
    {
        return "Negative value"
    }
    console.log(Math.sqrt(a) + Math.sqrt(b))
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(caseInSwitch(10))
console.log(abTest(100,64))

// build js object

var people = {
    "name": "Thanh",
    "age": 20,
    "friends": ["everything!"]
}
people.language = "python"
obj1 = people
console.log(obj1)

//loop

var myArray = []

var i = 0;
/*
while (i < 10)
{
    myArray.push(i);
    i++;
}


for (var i = 10; i > 0; i-= 2)
{
    myArray.push(i);
}
console.log(myArray)
*/
var our_array = [1, 2, 3, 5, 7, 10]
var sum = 0
for (var i = 0; i < our_array.length; i++){
    sum += our_array[i];
}

function convert_to_integer(str)
{
    return parseInt(str, 2);

}
console.log(convert_to_integer("1001"))
//arrow function
var myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1,2], [3,4]))


// filter and map
const realNumberArray = [3, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]

const squareList = (arr) => {
    const squredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squredIntegers;
}

const squaredIntergers = squareList(realNumberArray);
console.log(squaredIntergers);

//reduce
const sum1 = (function(){
    return function sum (...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum1(1, 2, 3))

// //user input
// const prompt = require('prompt-sync')();
 
// const name = prompt('What is your name?');

const logger = function (a, b) {
    return a + b
}
console.log(logger(10,2))


list1 = ['Python', 'Java Script', "Ruby"]

console.log(...list1)

const func1 =  (a, b, ...params) => {
    for (var i = 0; i < params.length; i++)
        console.log(params[i])
}
func1(...list1)