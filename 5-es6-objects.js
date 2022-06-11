// Object property shorthand
const name = 'Rusal'
const userAge = 21

const testObj = {
    name,
    age: userAge
}

console.log(testObj)

// Object destructuring
const product = {
    label: "Red Notebook", 
    price: 3,
    stock: 200,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock} = product

const transaction = (type, { label, stock } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)

