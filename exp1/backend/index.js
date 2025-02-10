const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const StudentModel = require("./models/student.model")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("gooood")
})
app.post("/register1", async(req, res) => {
  
    const { name, email, rollno, branch, department, address, dob } = req.body;
 
    const user = await StudentModel.create({
      name,
      email,
      rollno,
      branch,
      department,
      address,
      dob,
    });
  
  res.json({
    message:"Student registered..."
  })
});
app.listen(3000)
