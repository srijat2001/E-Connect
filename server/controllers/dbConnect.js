import mongoose from 'mongoose';
import "dotenv/config";

export const Connectdb = async() => {
    try{
        await mongoose.connect(process.env.dbURL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("Connection established");
    }catch(e){
        console.log({msg : e});
    }
}