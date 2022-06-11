const greeter = (name = "User") => {
    console.log("Hello " + name)
}

// if argument is provided
greeter("Rusal") // will print "Hello Rusal"
// if no argument is provided
greeter() // will print "Hello User"


