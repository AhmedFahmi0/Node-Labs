const validateUser=require("../utils/usersValidation");
const userModel=require("../models/usersModel");
const bcrypt=require("bcrypt");
const saltRounds = 9;

let login=async (req,res)=>{
    let user=req.body;
    let foundUser;
    try {
        foundUser=await userModel.findOne({"email":user.email});
    } catch (error) {   
    }
    if(!foundUser){
        return res.status(400).json("Invalid email or password");
    }
    
    bcrypt.compare(user.password,foundUser.password,function(err,same){
        if(same){
            res.status(200).json("login success");
        }else{
            res.status(400).json("Invalid email or password");
        }
    });
}

let addNewUser=async (req,res)=>{
    let user=req.body;
    console.log(user)
    if(!validateUser(user)){
        return res.status(401).json("check your data please");
    }
    let foundUser;
    try {
        foundUser=await userModel.findOne({"email":user.email});
    } catch (error) {
        
    }
    if(foundUser){
        return  res.status(401).json("user already exists login");
    }

    user.password=await bcrypt.hash(user.password, saltRounds)
    console.log(user.password)
    let newUser=new userModel(user);
    newUser=newUser.save();
    if(newUser){
        res.status(201).json("user added");
    }else{
        res.status(301).json("couldnt add user");
    }
}

module.exports={
    login,
    addNewUser
}