let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
let cors = require('cors');
let port = process.env.port;
let dbcon = process.env.cloud_mongodb_con;



let app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(dbcon,{
    useNewUrlParser:true, useUnifiedTopology:true
}).catch((err)=>{
    console.log("bir hata oluştu"+ err);
});

var con = mongoose.connection;

if(!con) console.log("mongoDB'ye bağlanılamadı");
else {
    console.log("mongoDB'ye başarıyla bağlanıldı");
}

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.listen(port,()=>{
    console.log("node.js server çalışıyor");
});