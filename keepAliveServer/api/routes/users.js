
//imports
const express = require("express");
const router = express.Router();

const {
    getAllManagers,
    createManager
} =  require('../controllers/users');

router.get('/getAllManagers', getAllManagers );             //to get all managers
router.post('/create', createManager);                      //to create manager

module.exports = router;