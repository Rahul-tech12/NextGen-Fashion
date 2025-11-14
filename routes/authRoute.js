import express from 'express'
import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from '../helper/authHelper.js';
import JWT from 'jsonwebtoken';

const router=express.Router();


//Register
router.post('/register',async(req,res)=>{
    try {
        const {name,email,password,confirmpw}=req.body;
        if(!name || !email || !password || !confirmpw){
            res.status(400).send({
                error:"Enter values for all fields"
            })
        }
        const existingUser=await userModel.findOne({email:email});
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already registered.Login to proceed'
            })
        }
        const hashedPassword=await hashPassword(password);
        const newUser=await new userModel({name,email,password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            message:'Registered successfully',
            info:{
                name:newUser.name,
                email:newUser.email
            }
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
        console.log(error);
    }
});

//login
router.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(404).send({
                message:'Enter values for all the fields'
            })
        }
        const user=await userModel.findOne({email});
        if(!user){
            return res.send({
                success:false,
                message:'Not registered!'
            })
        }
        const match=await comparePassword(password,user.password);
        if(!match){
            res.status(200).send({
            success:false,
            message:'Wrong password. Try again'
        })
        }
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(200).send({
            success:true,
            message:'Login successfully!',
            info:{
                name:user.name,
                email:user.email
            },
            token
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
        console.log(error);
    }
})

export default router;