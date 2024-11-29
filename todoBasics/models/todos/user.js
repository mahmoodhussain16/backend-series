import mongoose from "mongoose"

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
            unique:true
        },
        role:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            minlength:3
        }
    }, {timestamps:true}
);

export const User=mongoose.model('User',userSchema)

