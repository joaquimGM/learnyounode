const http = require ('node:http')
const map = require ('through2-map')


const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }
    
    req.pipe(map(chunk => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
    })

server.listen(Number(process.argv[2]))
console.log('Server is running on port', process.argv[2]);