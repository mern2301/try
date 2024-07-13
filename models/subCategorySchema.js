const mongoose = require('mongoose');
const { Schema } = mongoose;

const subCategorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:String,
    isActive:{
        type: Boolean,
        default: false
    },
    category:{
       type: Schema.Types.ObjectId,
       ref: "CategoryList"
    },
    status:{
        type: String,
        default: 'waiting',
        enum: ['waiting', 'approved', 'rejected']
    },
    created:{
        type: Date,
        default: new Date()
    },
    updated:{
        type: Date
    }
})



module.exports = mongoose.model('SubCategoryList', subCategorySchema)