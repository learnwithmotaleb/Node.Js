const http = require('http');
const fs = require('fs');
const os = require('os');
const port = 8000;
const hostname = '127.0.1';

const server = http.createServer((req, res)=>{

     // fs.readFile('Lesson5/index.html',(err, data)=>{
     //      if(err){
     //           res.writeHead(500, {'Content-Type': 'text/plain'});
     //           res.write("File not found");
     //           res.end("Internal Server Error");

     //      }else{

     //           res.writeHead(200, {'Content-Type': 'text/html'});
     //           res.write(data);
     //           //res.write(os.userInfo())
     //           res.end();


     //      }
     // })



     res.writeHead(202, {'Content-Type': 'text/html'});
     res.write("Hello, I'm Abdul Motaleb from Devovate It Academy");
     res.end("index.html");

});

server.listen(port, hostname, ()=>{
     console.log(`Server running at http://${hostname}:${port}`);

})