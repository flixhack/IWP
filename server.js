import {} from "main.js"

const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html' })
    fs.readFile('questionnaire.html', function(error, data)
    {
        if (error)
        {
            res.writeHead(404)
            res.write('this is not the files you are looking for')
        }
        else 
        {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error)
{
    if (error){
        console.log('whoops', error)
    }
    else 
    {
        console.log('server on port ' + port)
    }
})