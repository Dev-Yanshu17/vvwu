//server.js
const express=require('express');
const app=express()
const PORT = 3000;

//middleware to parse JSON
app.use(express.json());

//sample GET endpoint
app.get('/api/hello',(req,res)=> {
    res.json({ message: 'Hello from express'})
})

//sample POST endpoint
app.post('/api/data',(req,res)=>{
    const receivedData = req.body;
    console.log('Recevied:'  ,  receivedData);

    res.json({
        message  :  'Data received successfully',
        data : receivedData
    });
});

// Sample login POST endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    console.log('Received:', req.body);

    if (username=='yanshu'  && password =='1234') {
        res.json({
            message: 'Login successfully',
            data: { username ,password}
        });
    } else {
        res.status(401).json({
            message: ' Username and password must match.'
            
        });
    }
});

// app.post('/api/login', (req, res) => {
//     const receivedData = req.body;

//     console.log('Received:', receivedData);
//     const uname=receivedData['name'];
//     const password=receivedData['pass'];

//     if (uname=="yanshu"  && password =='1234') {
//         res.json({
//             message: 'Login successfully',
//             //data: { username ,password}
//         });
//     } else {
//         res.status(401).json({
//             message: ' Username and password must match.'
            
//         });
//     }
// });

app.listen(PORT,() => {
    console.log('server running on http://localhost:${PORT}');
});