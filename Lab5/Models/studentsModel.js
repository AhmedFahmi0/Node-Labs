const mongoose=require("mongoose");
const URL='mongodb://127.0.0.1:27017/school'
async function main() {
    await mongoose.connect(URL,{useNewUrlParser:true});
    
}
main();

const studentSchema = new mongoose.Schema({
    name: {
        type:"String",
        required:true,
        min: 3
    },
    age:{
        type: "Number",
        min:15,
        max:50,
        required:true
    }
})

module.exports=mongoose.model('students', studentSchema);