//main

const express=require('express');
const app=express();
const Routes=require('./user.js');
const cors=require("cors");

app.use(cors());
app.use(express.json()); // 用于解析 JSON 请求体
app.use('/',Routes);

app.listen(process.env.PORT, () => {
  console.log('服务器启动');
});

