import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();


//db Connection
import {Connectdb} from './controllers/dbConnect'
Connectdb();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


//routes
import UserRoute from './routes/user';
app.use(UserRoute);

app.listen(4000,() => console.log("Server is up and running"));

app.get('/',(req,res) => res.json("Hello World"));

export default app;git 