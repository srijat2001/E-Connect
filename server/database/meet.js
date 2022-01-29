import mongoose from 'mongoose';
const MeetingSchema = mongoose.Schema({
    meetId : {
        type : String
    },
    name : {
        type : String
    },
    host : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    members : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }],
    messages : [{
        message : {
            type : String,
            required : true
        },
        sender : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            default : Date.now
        }
    }],
    timestamps : true
})

const Meet = mongoose.model("meet",MeetingSchema);
export default Meet;