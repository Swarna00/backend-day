const dotenv = require('dotenv');
dotenv.config();
let SERVER_PORT = process.env.SERVER_PORT
let HOST_IP = process.env.HOST_IP

const http = require('http');


let myServer = http.createServer((req,res)=>{
    // res.write("hellow developers!1")
    // res.write("hellow developers!2")
    // res.write("hellow developers!3")
    // res.write("hellow developers!4")
    // res.write("hellow developers!5")
    // res.writeHead(202, {'Content-type':'text/plain'})
    // res.write("hellow")
    //  res.end()
    // console.log(req.url)

    if(req.url =='/'){
        res.write("Hello developers..")
        res.end();
    }else if(req.url == '/About'){
        res.write("About")
        res.end();
    }else
    res.write("....");
    res.end();
});

myServer.listen(SERVER_PORT,HOST_IP,()=>{
console.log(`Server is running..! http://${HOST_IP}:${SERVER_PORT}`)
});