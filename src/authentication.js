var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
const secretKey = "secretkey"


app.get('/', (req, res) => {
   res.json({
    message : "a simple api",
   });
});

app.post("/login" , (req,res) => {
    const user = {
        id : 1,
        username: "anil", 
        email: "abc@gmail.com"
    }
    jwt.sign({user}, secretKey, {expiresIn: '300s'}, (err,token) => {
        res.json({
            token
        })
    })
    
})

app.post("/profile", verifyToken, (req,res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if(err){
            res.send({result: "Invalid Token"})
        }
        else{
            res.json({
                message: "profile Accessed",
                authData
            })
        }
    })
} )

function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1]
        req.token = token;
        next()
    }else{
        res.send({
            result: 'Token is not Valid!'
        })
    }
}
app.listen(3000, ()=> {
    console.log(`Connected on http://localhost:${3000}`)
});
