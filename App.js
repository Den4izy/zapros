const http = require('http');

http.createServer((request, response)=>{
    console.log('Server Work');
    response.end('This work!');
}).listen(3001);