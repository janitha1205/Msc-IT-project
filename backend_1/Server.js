const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');


const app= express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password:"",
    database:"mysql"
})

app.post('/login',(req,res)=>{
    
    const sql = "SELECT * FROM login WHERE email=?";
   
    db.query(sql,[req.body.email],(err,data)=>{
        if(err) return res.json("Login Failed");
        if(data.length>0){
            bcrypt.compare(req.body.password,data[0].Password,(err,match)=>{
                if (match){
                   
                    return res.json(data);
                    
                }else
                {
                    return res.json("incorret credentials")
                }
            })
           
        } else{
            return res.json("No record")
        }
    })
})

app.post('/login4/:id',(req,res)=>{
        
    const sql2 = "SELECT * FROM login WHERE ID=?";
    const {id}=req.params;
    var dataf;
    db.query(sql2,id,(err,data1)=>{
        if(err){
            return res.json("no enty");
        }else{
            const sql = "DELETE FROM login WHERE ID=?";
    
            db.query(sql,id,(err,data)=>{
                if(err) return res.json("Delete Failed");
                if(data.affectedRows!=0){
                    return res.json(data1[0])
                
                
                } else{
                    return res.json("empty space")
                }
            })

        }

    })
    
})

app.post('/login3',(req,res)=>{

            let sql = "SELECT * FROM login"

            db.query(sql,[],(err,data)=>{
                if(err) return res.json("no record");
                if(!err){
                    return res.json(data)
                }
            })

        })





app.post('/login2',(req,res)=>{
    const password=req.body.pword
    const salt = 10;
    bcrypt.hash(password,salt,(err,hpassword)=>{
        if(err){
            res.status(418).send('couldnot hash password')
        }else{
            let sql = "INSERT INTO login (First_Name,Sure_Name,Email,Password,Address,Department,Designation,IsAdmin) VALUES (?,?,?,?,?,?,?,?)"; 
            

            db.query(sql,[req.body.firstname, req.body.surename,req.body.email,hpassword,req.body.address,req.body.department,req.body.designation,req.body.admin],(err,data)=>{
                if(err) return res.json("miss matched");
                if(!err){
                    return res.json(req.body)
                }
            })

        }


    })
    
})
app.listen(8081,()=>{

    console.log("Listening.....")
})