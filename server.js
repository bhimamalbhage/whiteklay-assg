const express = require("express");
const connectDB = require("./db");

const app = express();
const cors = require("cors");

//Connect DB
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('API Running');
})

// Define Routes
app.use('/employee', require("./routes/employee"));
app.use('/role', require("./routes/role"));
app.use('/organization', require("./routes/organization"));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})