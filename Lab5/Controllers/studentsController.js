const validateStudent=require("../utils/studentsValidation");
const studentModel=require("../Models/studentsModel")


// get all students
let getAllStudents=async (req,res)=>{
    console.log("get all students")
        let Students=await studentModel.find({});
        res.status(201).json(Students)
    }
// get student by id
let getStudentsById=async (req,res)=>{
    console.log("get student by id");
    let id=req.params.id;
    let student=null;
    try {
        student =await studentModel.findById({"_id":id});
    } catch (error) {
        //  console.log(error);
    }
    if(student){
        res.status(201).json(student);
    }else{
        res.status(401).json("not found");
    }
}
// add new students
let addNewStudent=async (req,res)=>{
    console.log("add students")
    let newStudent=req.body;
    if(validateStudent(newStudent)){
        console.log(newStudent)
        let student=new studentModel(newStudent);
        console.log("2")
        await student.save();
        console.log("3")
            res.status(201).json(student);
    }else{
        res.status(301).send("check ur data");
    }
    
}
// update students
let updateStudentById=async (req,res)=>{
    console.log("update students")
    let id=req.params.id;
    let student=req.body;
    let updatedStudent;
    if(validateStudent(student)){
        try{
            updatedStudent=await studentModel.findOneAndUpdate({"_id":id},
            {
                "$set":student
            },{
                returnOriginal: false
            }
            )
        }catch(err){
        }
        if(updatedStudent){
            res.status(201).json(updatedStudent);
        }else{
            res.status(401).json("couldent update");
        }
        
    }else{
        res.status(401).send("check ur data")
    }
    
}
//delete student
let deleteStudentByID=async (req,res)=>{
    console.log("delete student by id")
    let id=req.params.id;
    
    let deletedStudent;
    try {
        
        deletedStudent=await studentModel.findOneAndDelete({"_id":id}); 
    } catch (error) {
        console.log(error); 
    }
    // console.log(deletedStudent); 
    if(deletedStudent)  {
        res.status(201).json("deleted");
    }else{
        res.status(401).json("not found");

    }
    
}

module.exports={
    getAllStudents,
    getStudentsById,
    addNewStudent,
    updateStudentById,
    deleteStudentByID
}