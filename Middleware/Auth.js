const jwt = require("jsonwebtoken");
require('dotenv').config();

function auth(req, res, next){
        const token = req.header('x-auth-token');

        console.log("token:"+token);
        if(!token) return res.status(400).json({msg: "No Token, authorizzaton denided"})      
        try{
            const decoded = jwt.verify(token, process.env.secretjwts);
            console.log("decoldef: "+decoded);
            //dd user from payload
            req.user = decoded;
            console.log("Content:"+req.user);
            next();
        }catch(e){
            res.status(400).json({msg: " token is not validat"})
        }
};

module.exports = auth;