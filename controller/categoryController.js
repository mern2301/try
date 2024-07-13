const categorySchema = require("../models/categorySchema");
const subCategorySchema = require("../models/subCategorySchema");

//CREATE CATEGORY CONTROLLER
async function createCategoryController(req,res){
    const {name,description} = req.body;
    console.log(name, description);
    const duplicateCategory =await categorySchema.find({name});
    if(duplicateCategory.length>0){
        return res.json({error: "Category already exists"})
    }
    const category = new categorySchema({
        name,
        description
    });
    category.save()
    res.json({success: "Category created Successfully done"})
}


//CREATE SUB CATEGORY CONTROLLER
async function createSubCategoryController(req,res){
    const {name,description,category} = req.body;
    console.log(name, description);
    const duplicateSubCategory =await subCategorySchema.find({name});
    if(duplicateSubCategory.length>0){
        return res.json({error: "Sub Category already exists"})
    }
    const subcategory = new subCategorySchema({
        name,
        description,
        category
    });
    subcategory.save()
    console.log(subcategory._id);
    await categorySchema.findOneAndUpdate(
        {_id:subcategory.category},
        {$push:{subcategory: subcategory._id}},
        {new:true}
    )
    res.json({success: "Sub Category created Successfully done"})
}

//CATEGORY STATUS CONTROLLER
async function createCategoryStatusController(req,res){
    const {status, name} = req.body;
    console.log(status);
    if(status == 'rejected' || status == "waiting"){
        const category = await categorySchema.findOneAndUpdate(
            {name},
            {$set:{isActive: false, status:status}},
            {new:true}
        )
        res.json({success: "Category Status Updated"})
    }else if(status == "approved"){
        const category = await categorySchema.findOneAndUpdate(
            {name},
            {$set:{isActive: true, status:status}},
            {new:true}
        )
        res.json({success: "Category Status Updated"})
    }
}


//SUB CATEGORY STATUS CONTROLLER
async function createSubCategoryStatusController(req,res){
    const {status, name} = req.body;
    console.log(status);
    if(status == 'rejected' || status == "waiting"){
        const category = await subCategorySchema.findOneAndUpdate(
            {name},
            {$set:{isActive: false, status:status}},
            {new:true}
        )
        res.json({success: "Sub Category Status Updated"})
    }else if(status == "approved"){
        const category = await subCategorySchema.findOneAndUpdate(
            {name},
            {$set:{isActive: true, status:status}},
            {new:true}
        )
        res.json({success: "Sub Category Status Updated"})
    }
}


// GET ALL CATEGORY CONTROLLER
async function getAllCategoryController(req,res){
    const getcategory =await categorySchema.find({}).populate("subcategory")
    res.send(getcategory)
}

// GET ALL SUB CATEGORY CONTROLLER
async function getAllSubCategoryController(req,res){
    const getsubcategory =await subCategorySchema.find({});
    res.send(getsubcategory)
}


module.exports = {createCategoryController, createSubCategoryController,createCategoryStatusController,createSubCategoryStatusController,getAllCategoryController,getAllSubCategoryController}