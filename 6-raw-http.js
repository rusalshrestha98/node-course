const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=4333e0bd80aaa5d0b82a4ccf2f9125ea&query=40,-75units=f'

const request = http.request(url, (response) = {
    let data = ''
    // allows you to register a handler that fires when data comes in 
    response.on('data', (chunk) => [
        console.log(chunk)
    ])
    // handler that fires when data stops coming in
    response.on('end', () => {

    })
})

request.end()