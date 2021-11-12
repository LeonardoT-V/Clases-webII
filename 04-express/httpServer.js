const fs =  require("fs");
const http = require("http");

const expres =  require("express");

const PORT= 8080;

const main =  fs.readFileSync("./index.html")
const about =  fs.readFileSync("./about.html")
const error =  fs.readFileSync("./error.html")

http.createServer((req, res)=>{
    if ( req.url === "/" )
    {
        res.writeHead(200, { "Content-Type":"text/html" });
        res.write(main);
    }
    else if ( req.url === "/about" )
    {
        res.writeHead(200, { "Content-Type":"text/html" });
        res.write( about );
    }
    else
    {
        res.writeHead(200, { "Content-Type":"text/html" });
        res.write( error );
    }
    res.end();
}).listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});