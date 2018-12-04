const express = require('express');
const app = express();
var port=3000;
var host='localhost';
//main code
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/src/views/index.html');
});
app.get('/static/style/css',(req,res)=>{
	res.sendFile(__dirname+'/src/css/style.css');
});
app.get('/static/js/script',(req,res)=>{
	res.sendFile(__dirname+'/src/js/app.js')
});
app.get('/static/favicon.ico',(req,res)=>{
	res.sendFile(__dirname+'/src/images/favicon.ico')
});
//listening stuff
app.listen(port,host,()=>{
    console.log(`Server Running At http://${host}:${port}/`);
    console.log(`Ctrl+C To Cancel The Server.`)
});