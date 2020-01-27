const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');               ///synchronous after get the json next line run
const laptopData = JSON.parse(json);
const server = http.createServer((req, res) => {
    //console.log(req);
   // console.log(req.url);

    const query = url.parse(req.url, true)
//    console.log(query);

const pathName = url.parse(req.url, true).pathname;
const id = url.parse(req.url, true).query.id;


                                                            //////////this is called routing
    if(pathName === '/products'){
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.end('Hey Product');
    } else if(pathName === '/laptop' && id < laptopData.length){
        res.writeHead(200, {'Content-type' : 'text/html'});
        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {            ///async that's why we put callback function after it completes the task

        const laptop = laptopData[id];
        let output = data.replace(/{%PRODUCTNAME%}/g,laptop.productName);
        output = output.replace(/{%PRICE%}/g,laptop.price);
        output = output.replace(/{%SCREEN%}/g,laptop.screen);
        output = output.replace(/{%CPU%}/g,laptop.cpu);
        output = output.replace(/{%STORAGE%}/g,laptop.storage);
       
        output = output.replace(/{%RAM%}/g,laptop.ram);

        output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
        output = output.replace(/{%IMAGE%}/g,laptop.image);

            res.end(output);

        });
    } else{
        res.writeHead(404, {'Content-type' : 'text/html'});
        res.end('Not found!');
    }
   
});

server.listen(1337, '127.0.0.1', ()=>{
    console.log('Listening for requests now');
});


/*
app design color
1
#AF8447
#AF8447
#1F1F1F
#F2F2F2
#FEFFFF

2
#79AF7D accent
#7B7B7B accent disable
#E6E6E6 background
#8F8F8F text
#FFFDFF text with accent
#F5F5F5 navbar
#E6E6E6
#FFFFFF
#919598 text
*/