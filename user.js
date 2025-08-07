const express = require('express');
const router = express.Router();
const pool = require('./db.js'); // 数据库连接池
const crypto = require('crypto');

// 生成随机用户ID函数
function generateRandomId() {
  return crypto.randomBytes(4).toString('hex'); // 比如 "f3e1ab24"
}

//添加随机id到数据库
router.post('/user',(req,res)=>{
    var randnewid=generateRandomId();
    pool.query('insert into test (name) values(?)',[randnewid],(err,result)=>{
        if (err) {
            return res.status(500).json({ message: '创建新用户失败' });
        }
        return res.json({newId:randnewid});
    });

});
//删除所有id
router.delete('/user',(req,res)=>{
    pool.query('delete from test',(err,result)=>{
        if (err) {
            return res.status(500).json({ message: '删除用户失败' });
        }
        return res.json({message: '删除用户成功'});
    });

});

module.exports=router;

