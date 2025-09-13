const express = require("express");
const cookieParser = require("cookie-parser");
const app=express();

//middleware to parse cookie from the request
app.use(cookieParser());

//route to set the cookie
app.get("/setCookie", (req,res)=>{
    //setting the cookie
    res.cookie("username","MSCIT PG", {maxAge:86400000});
     res.cookie("password","yanshu", {maxAge:86400000});
    res.send("cookie set successfully");
});

//route to retrive the cookie
app.get("/getCookie", (req,res)=>{
    //retriving cookie from the request
    const username = req.cookies.username;
    const password = req.cookies.password;
    res.send(`username,password: ${username},${password}`);
    // res.send(`username:${username}`);
    //  res.send(`password:${password}`);

});

//route to delete the cookie
app.get("/clearCookie",(req,res)=>{
    res.clearCookie("username");
    res.clearCookie("password");
    res.send("cookie deleted successfully");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})