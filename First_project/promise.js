// xu ly callback hell
function sleep(ms) {
    return new Promise(function (resolve){
        setTimeout(resolve, ms)
    })
}
sleep(1000)
    .then(function(){
        console.log(1)
        return sleep(1000)
    })
   .then(function(){
        console.log(2)
        return sleep(1000)
    })
    .then(function(){
        console.log(3)
        return sleep(1000)
    })