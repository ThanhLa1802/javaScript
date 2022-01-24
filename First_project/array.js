courses = [
    {
        id:1,
        name:'Python',
        coin: 500
    },
    {
        id:2,
        name:'Java',
        coin: 400
    },
    {
        id:3,
        name:'ReactJS',
        coin: 300
    },

]

var check = courses.find((course, index) => { 
    return course.coin === 0
} )

inputs = [1, 'hi', false, 8, undefined, '', NaN]

function convertToBoolean(inputs) {
    newArray= []
    inputs.map((element, index) => {
        if (element)
            newArray.push(true)
        else
            newArray.push(false)
      
    })
    return newArray
}

Array.prototype.forEach2 = function(callback)
{
    for (var index in this)
    {
        if (this.hasOwnProperty(index))
            callback(this[index], index, this)
    }
}

// courses = ["PHP", "JavaScript", "Python"]

// courses.forEach2((value, index, array) => {
//     console.log(value, index, array)
// })

courses = [
    {
        course: "Python",
        cost: 600
    },
    {
        course: "Flask",
        cost: 200
    },
    {
        course: "Django",
        cost: 400
    },
]


Array.prototype.filter2 = function(callback)
{
    output = []
    for (index in this)
        if(this.hasOwnProperty(index))
            {
            result = callback(this[index], index, this)
            if(result)
                output.push(this[index])
            }
    return output
}


var result = courses.filter2((value, index) => {
    return (value.cost >300)   
})

console.log(result)
