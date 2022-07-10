
const express = require("express");
const mongoose = require('mongoose');
const { Armory } = require("./api/models/armory");
const { Users } = require("./api/models/armory");

const app = express();
app.use(express.json());

//require routs from folders
const armoryRoutes = require('./api/routes/armory');
const usersRoutes = require('./api/routes/users');



//enable cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


//routes
app.use('/armory', armoryRoutes);
app.use('/users', usersRoutes);


//old routers
/*
app.get("/:id", (req, res) => {
    Armory.create({name: "yakov", managerName: "yakobob", supervisorName: "ronen"}).then(
        () => res.send(`This is home page. ${req.params.id}`)
    )
});
app.post("/createArmory", (req, res) => {
    res.send(`we got from postman: ${req.body.managerName}`)
});
*/

//port
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
 });


//for a private db will be needed to set the correct url with
//the user name and password , and cover it in the 'gitignore'
//connection to mongoDB
mongoose
        .connect('mongodb://0.0.0.0:27017/keepAlive', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('mongo - Connected Successfully'))
        .catch((err) => console.error(`mongo - Not Connected ${err}`));
