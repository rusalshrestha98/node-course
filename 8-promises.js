// const doWorkPromise = (resolve, reject) => {
//     setTimeout(() => {
//         // no error
//         resolve([1, 2, 3])
//         // // error
//         // reject("Things went wrong!")
//     }, 2000)
// }

// doWorkPromise.then((result) => {
//     console.log("Success:", result)
// }).catch((error) => {
//     console.log("Error:", error)
// })

// LECTURE 93: PROMISE CHAINING
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        })
    }, 2000)
}

// correct promise chaining example
add(1, 1).then((sum) => { // add first "then" statement here
    console.log(sum) // returns after 2 seconds
    return add (sum, 4) // returns after 2 seconds TOO
}).then((sum2) => { // add second "then" statement here
    console.log(sum2)
}).catch((e) => { // only need one "catch" statement
    console.log(e)
})

// // nested promise is NOT the same as a chained promise
// add(1,2).then((sum) => {
//     console.log(sum) // returns after 2 seconds

//     // second nested promise 
//     add(sum,5).then((sum2) => {
//         console.log(sum2) // returns after 4 seconds
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })