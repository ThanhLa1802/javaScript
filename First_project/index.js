console.log("Hello world")

var myName = "Thanh"

myName = 8

let ourName = "Test"

const pi = 3.14

var a = 7;
var b = a + 8;
console.log(b)
var product = 2.0*2.5
console.log(product)
my_str = "Im'Thanh. \"This is my name\""
test_str = "Test string"
console.log(my_str + test_str)

var arr = ["test", 7, 9, 10]
arr.push(10)
arr.shift()
//console.log(arr)

function nextInLine(arr, item)
{
    arr.push(item);
    return item;

}
var test_arr = [1, 2, 3, 4, 5];
console.log("Before: "+ JSON.stringify(test_arr));
console.log(nextInLine(test_arr, 6));
console.log("After: " + JSON.stringify(test_arr));

const person1 = {
    name: 'Peter'
}
const person2 = {
    name: 'Peter'
}

console.log(person1.name === person2.name)

myInfo= {
    "name": "Thanh",
    "age":12,
    "language": "Python"
}

for (var f in myInfo)
    console.log(myInfo[f])


inputArray = ['a','b', 'c', 'd', 'a', 'a', 'c']
dict_temp = {}
temp = []
for (var x in inputArray)
{
    dict_temp[inputArray[x]] = "value";
}
for ( x in dict_temp)
{
    temp.push(x)
}
console.log(temp)