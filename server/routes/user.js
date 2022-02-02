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
        const {errors} = await ValidateSignUp(req.body);
        if(errors.length > 0) return res.status(500).json(errors); 
        const {name,email,password} = req.body;
        const checkuserbyEmail = await UserModel.findOne({email});
        if(checkuserbyEmail){
            errors.email = "User already exists";
            return res.status(404).json(errors);
        }
        //password hashingarticle
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
        const {errors} = await ValidateSignIn(req.body);
        if(Object.keys(errors).length > 0) return res.status(400).json(errors); 
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        //res.json({user : user});
        if(!user){
            errors.email = "User not found";
            return res.status(404).json(errors);
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            errors.password = "Password doesn't match";
            return res.status(404).json(errors);
        }
        return res.status(200).json({msg : "Successfully logged in"});
        
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
Router.get('/getusers',async(req,res)=>{
    try{
        const users = await UserModel.find();
        return res.status(500).json({user : users});
    }catch(e){
        return res.status(500).json({error : e});
    }
})
export default Router;
