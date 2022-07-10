
//imports
const mongoose = require('mongoose');
const {Users} = require('../models/users'); 

module.exports = {

    getAllManagers: (req , res) => {
        Users.find().then((users) => {
            res.status(200).json({            //success
                users
            })
        }).catch(error => {
            res.status(500).json({            //error
                error
            })
        }); 
    },

    createManager: (req , res) => {

        const {
            managerName,
            armoryID
        } = req.body;

        const users = new Users({
            _id: new mongoose.Types.ObjectId(),
            managerName,
            armoryID
        });

        users.save().then(() => {
            res.status(200).json({
                message: 'manager created!'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });  
    }
}