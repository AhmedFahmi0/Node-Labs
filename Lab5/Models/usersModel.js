const mongoose=require("mongoose");
const URL='mongodb://127.0.0.1:27017/school'
async function main() {
    await mongoose.connect(URL,{useNewUrlParser:true});
    
    
}
main();
const usersSchema = new mongoose.Schema({
    name: {
        type:"String",
        required:true
    },
    email:{
        type: "String",
        required:true
    },
    password: {
        type: "String",
        required:true
    },
    isAdmin:{
        type:"Boolean"
    }
});


module.exports=mongoose.model('users', usersSchema);