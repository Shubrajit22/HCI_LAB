const mongoose = require("mongoose")

try {
    mongoose.connect("mongodb://localhost:27017/Student_Info")
    .then(console.log("Database Connected...."))
} catch (error) {
  console.log("Database error "+ error)  
}
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    rollno: String,
    branch: String,
    department: String,
    address: String,
    dob: Date,
});

const StudentModel = mongoose.model('Student', studentSchema); // This line is CRUCIAL!

module.exports = StudentModel;