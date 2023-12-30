const ex= require("express");
const {route}=require("express/lib/application");
const Course=require("../models/course")
const router=ex.Router();

//creating the routers

//get all the courses
router.get("/",async (req,res)=>{
    try{
        const courses= await Course.find()
        req.json(courses)
    }
    catch(err){
        res.json(err)
    }
})

//get single course
router.get("/:courseId", async (req,res)=>{
    const courseId=req.params.courseId
    try{
        const c=await Course.findById(courseId)
        res.json(c)
    }
    catch(error){
        res.json(error)
    }
})


//create course
router.post("/", async (req,res)=>{
    const course= await Course.create(req.body)
    req.json(course)
})

//delete course
router.delete("/:courseId",async (req,res)=>{
    try{
        await Course.remove({_id:req.params.courseId})
        res.status(200).json({
            message:"done"
        })
    }
    catch(error){
        res.json(error)
    }
})

//update course
router.put("/:courseId",async (req,res)=>{
    const courseId=req.params.courseId

    try{
        const course= await Course.updateOne({
            "_id":courseId
        },req.body
        )
        res.json(course)
    }
    catch(error){
        res.json(error)
    }
})

module.exports=router;