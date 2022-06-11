const doWorkCallback = () => {
    setTimeout(() => {
        // // error
        // callback("This is my error!", undefined)
        // no error
        callback(undefined, [1, 2, 3])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})