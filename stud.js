const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Corrected MongoDB URI and options
mongoose.connect('mongodb://localhost:27017/vvwu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Failed', err));

//Schema and Model wuth exact collection name
const studSchema = new mongoose.Schema({
    stud_fname: String,
    stud_lname: String,
    stud_email: String
},{ collection: 'stud_mst'});

const Student = mongoose.model('Student',studSchema);


// Create Student
app.post('/api/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        const saved = await student.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});


//get all students
app.get('/api/students', async(req,res)=>{
    try{
        const data = await Student.find();
        res.json(data);

    }catch(err){
        res.status(500).json({message:'Fetch failed',error:err})
    }
});

//gat single student by id
app.get('/api/students/:id', async (req,res)=>{
    try{
        const student = await Student.findOne(
            {id : Number(req.params.id)});
            res.json(student);
    }catch(err){
        res.status(500).json({message: 'fetch single failed',error:err});
    }
});

//update student by id
app.put('/api/students/:id', async (req, res) =>{
    try{
        const updated = await Student.findOneAndUpdate(
            {id: Number(req.params.id)},
            req.body,
            {new: true}
        );
        res.json(updated);
    }catch(err){
        res.status(500).json({message: 'Update failed', error:err })
    }
})

//delete student by id
app.delete('/api/students/:id', async (req,res)=>{
    try{
        await Student.findOneAndDelete({ id: Number(req.params.id)});
        res.json({message: 'Deleted succssfully'});
    }catch(err){
        res.status(500).json({message: 'delete failed',error:err});
    }
})



app.listen(PORT, () => {
    console.log('server running');
});
