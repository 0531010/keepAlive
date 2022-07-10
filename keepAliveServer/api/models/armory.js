
//imports
const mongoose = require("mongoose"); 

//creating schema
//(It's like creating objects)
const ArmorySchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {type : String, required: true },
        managerName: {type : String, required: true },
        lastUpdatedTime: Date  

    },
    //{timestamps: true}
);


const Armory = mongoose.model('Armory', ArmorySchema);
module.exports = {Armory};