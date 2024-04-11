import mongoose from "mongoose";

const EmailSchma = new mongoose.Schema({
    to: {
        type:String,
        require: true
    },
    from: {
        type:String,
        require: true
    },
    subject: String,
    body: String,
    date: {
        type:Date,
        require: true
    },
    image: String,
    name: {
        type:String,
        require: true
    },
    starrted: {
        type:Boolean,
        require: true,
        default: false
    },
    bin: {
        type:Boolean,
        require: true,
        default: false
    },
    type: {
        type:String,  
        require: true
    }
});

const email = mongoose.model('emails',EmailSchma)
export default email 