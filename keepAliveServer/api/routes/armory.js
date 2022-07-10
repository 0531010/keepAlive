//all the logic code of each
// router is in the controllers file

//imports
const express = require("express");
const router = express.Router();

//import the routes logic from the controllers file
const {
    getAllArmories,
    getPings, 
    createArmory
} = require('../controllers/armory');          

router.get('/getAllArmories' , getAllArmories);    //router to get all the armories
router.get('/sendPing/:armoryid', getPings );      //router for the armory to send pings (getting the id of the armory in the url)
router.post('/create', createArmory);              //router to create new armory

module.exports = router;