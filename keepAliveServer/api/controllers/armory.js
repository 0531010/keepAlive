
//imports
const mongoose = require('mongoose');
const {Armory} = require('../models/armory');
var now = new Date();

module.exports = {

    //to get all the armories from db
    getAllArmories: (req , res) => {
        Armory.find().then((armories) => {
            res.status(200).json({            //status 200 - success
                armories
            })
        }).catch(error => {
            res.status(500).json({            //status 500 - error
                error
            })
        });
    },

    //for the armory to send pings, for each ping the server will update the time in 
    //the db for this specific id in the url
    getPings: (req , res) => {
        const armoryid = req.params.armoryid;

        Armory.updateOne({_id: armoryid} , { $set: { lastUpdatedTime : now } }).then(() => {
            res.status(200).json({
                message: 'Ping sended and current time updated'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    },

    //to create a new armory (Post request)
    createArmory: (req , res) => {

        const {
            name ,
            managerName,
            supervisorName
            //lastUpdateTime                   //its not necessary to set the time for the start
        } = req.body;

        const armory = new Armory({
            _id: new mongoose.Types.ObjectId(),
            name,
            managerName,
            supervisorName
            //lastUpdatedTime: now             //its not necessary to set the time for the start
        });

        armory.save().then(() => {
            res.status(200).json({
                message: 'armory created!'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });  
    }
}