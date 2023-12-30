const mongoose=require("mongoose")

const Course=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    Videos:{
        type:Number,
        require:true
    },
    Active:Boolean
});

module.exports=mongoose.model("courses",Course)