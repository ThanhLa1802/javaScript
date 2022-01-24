var users = [
    {
        id: 1,
        name: 'Thanh'
    },
    {
        id: 2,
        name: "Nam"
    },
    {
        id: 3,
        name: "Ronaldo"
    }

]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'This is comment 1'
    },
    {
        id: 2,
        user_id: 2,
        content: 'This is comment 2'
    }
]

// Fake API

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}

getComments()
    .then(function(comments){
        var userIds = comments.map((comment) => {
            return comment.user_id
        })
        return getUserByIds(userIds)
            .then(function(users){
               return users
        })
    })
    .then (function(users){
        console.log(users)
    })

function getUserByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function() {
            resolve(result)
        }, 1000)
    })
}


 

