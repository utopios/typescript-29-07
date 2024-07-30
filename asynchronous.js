console.log("Start")

setTimeout(() => {
    console.log("TimeOut")
}, 2000)

console.log("End")

const p1 = new Promise((resolve, reject) => {
    //Outside the mainThread
    resolve("result of promise")
})

p1.then((data) =>  {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

async function p2() {
    return "result of second promise"
}
p2().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

async function asyncFunction() {
    const resultP2 = await p2()
    const resultP1 =  await p1
    console.log(resultP2)
    console.log(resultP1)
}

asyncFunction().then(() => {
    console.log("End of two call")
})