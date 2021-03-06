const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required : true,
        trim: true
    },
    email : {
        type: String,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    balance : Number,
    income: Number,
    expense: Number,
    // transactions : {
    //     type: [{
    //         type: 'Schema.types.ObjectId',
    //         ref: 'Transactions'
    //     }]
    // }

})
const User  = mongoose.model('User', userSchema);
module.exports = User;