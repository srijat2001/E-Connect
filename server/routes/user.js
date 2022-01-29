import express from 'express';
const Router = express.Router();
import bcrypt from 'bcryptjs';

//database models
import UserModel from '../database/user';

//validation
import {ValidateSignUp,ValidateSignIn} from '../validation/auth';

/*
Route       - /signup
Description - Signup using email and password
Access      - public
Parameter   - NONE
Methods     - POST
*/
Router.post('/signup',async(req,res)=>{
    try{
        await ValidateSignUp(req.body);
        const {name,email,password} = req.body;
        const checkuserbyEmail = await UserModel.findOne({email});
        if(checkuserbyEmail) res.json({error : "User already exists"});
        
        //password hashing
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password,bcryptSalt);

        //save to db
        await UserModel.create({...req.body,password:hashedPassword});
        return res.status(200).json({msg : "User Added"});

    }catch(e){
        return res.status(500).json({error : e});
    }
})


/*
Route       - /signin
Description - SignIn using email and password
Access      - public
Parameter   - NONE
Methods     - POST
*/
Router.post('/signin',async(req,res)=>{
    try{
        await ValidateSignIn(req.body);
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        //res.json({user : user});
        if(user){
            const isMatch = await bcrypt.compare(password,user.password);
            if(isMatch) return res.status(200).json({msg : "Successfully logged in"});
        }
        return res.status(500).json({msg : "User not found"});
    }catch(e){
        return res.status(500).json({error : e});
    }
})

export default Router;
