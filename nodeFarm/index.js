// require file system module
const fs = require('fs');
const http = require('http');
// home folder started an move into txt folder to txt specify the encoding
// blocking, synchronous way
// const txtIn= fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(txtIn);
// const txtOut = `This is what is displayed about the avocado: ${txtIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', txtOut);
// console.log('File Written');

// non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('Error!');

//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('.txt/final.txt', `${data2}\n ${data3}`, 'utf-8', err =>{
//                 console.log('Your file has been written ');
//             })
//         });
//     });
// });

// console.log('Will read file');

/////////////////////////
// Server creation //
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server!');
})

server.listen(8000, '127.0.0.1', ()=> {
    console.log('Server is listening on port 8000');
});