const mongoose = require('mongoose')
const { Schema } = mongoose
const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            default:"none"
        },
        postedBy:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    }
)
const postingschema = mongoose.model("Post",postSchema)
module.exports = postingschema;