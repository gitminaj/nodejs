const http = require("http");

const server = http.createServer((req,res)=>{
    res.write('<h1> hello ');
    res.end();
})

server.listen(3000, ()=>{console.log("server started")});
