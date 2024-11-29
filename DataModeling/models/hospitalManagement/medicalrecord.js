import mongoose from "mongoose";

const medicalrecordSchema=new mongoose.Schema({
    name:{
        type:String
    }
},{timestamps:true})


export const MedicalRecord=mongoose.model("MedicalRecord",medicalrecordSchema);