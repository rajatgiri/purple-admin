var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loginSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    cur_date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('login',loginSchema);