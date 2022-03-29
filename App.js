const http = require('http');
const url = require('url');
const { parse } = require('querystring');

http.createServer((request, response)=>{
    console.log('Server Work');
    console.log('________________________________');
    // метод GET
    // параметри запроса
    if(request.method=='GET'){
        console.log(request);
        console.log('________________________________');
        // параметри конкретних даних
        console.log(request.method);
        console.log('________________________________');
        // розбираємо url запроса на параметри
        let urlRequest = url.parse(request.url, true);
        console.log(urlRequest);
        console.log('________________________________');
        // отртимуємо конкретний параметр url
        console.log(urlRequest.query.test);
        console.log('________________________________');
        // отримуємо на сервер параметр, опрацьовуємо його і відправляємо назад і виводимо в браузер
        response.end('Привіт ' + urlRequest.query.test);
    }
    else{
        // метод POST
        let body = '';
        request.on('data', chunk =>{
            // записуємо інформація частинами по чанкам
            body += chunk.toString();
        });
        request.on('end', ()=>{
            // виводимо тіло запроса( получається query строка)
            console.log(body);
            // розбиваємо строку на параметри( получаємо асоціативний масів)
            let params = parse(body);
            console.log(params);
            //отримуємо конкретний параметр
            let name = params.name;
            console.log(params.name);
            // робимо відповідь від сервера( обробляємо і надсилаємо наш параметр)
            response.end('Привіт ' + name);
        })
    }

}).listen(9999);