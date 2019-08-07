const express = require('express'),
http = require('http'),
path = require('path'),
file = require('fs'),
bp = require('body-parser');

const hostname = 'localhost';
const port = 3000;


const app = express();
app.use(bp.json());
app.use(express.static(__dirname + '/'));

app.post('/',(req,res)=>{
 var data = req.body;
 file.writeFile('From.txt',JSON.stringify(data),'utf8', function (err) {
  if (err) throw err;
  console.log('Saved!');
  res.json({
    
  })
});
})
// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server hurray</h1></body></html>');

// });

app.listen(port, hostname, ()=> {
  console.log(`Server running at http://${hostname}:${port}/`)});