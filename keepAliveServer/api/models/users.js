//imports
const mongoose = require("mongoose");

//create the schema
const UsersSchema = new mongoose.Schema(
    {
        _id : mongoose.Schema.Types.ObjectId,
        managerName: String,
        armoryID: { type: mongoose.Schema.Types.ObjectId , unique: true , require: true, ref: 'Armory' }   //getting the amoryId
    }
);

const Users = mongoose.model('Users', UsersSchema);
module.exports = {Users};