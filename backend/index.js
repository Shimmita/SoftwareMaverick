const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//importing the model of the database
const UserModel = require("./model/user");
//

const app = express();
app.use(cors());
app.use(express.json());

//connecting to the mongoDb
mongoose.connect("mongodb://127.0.0.1:27017/school");

//getting data from the backend database db
//loading the route home
app.get("/", async (req, res) => {
  UserModel.find({})
    .then((user) => {
      console.log(res.json(user));
    })
    .catch((err) => {
      console.log(res.json(err));
    });
});

//port number for the website
const PORT = 3001;
app.listen(PORT, (res, err) => {
  console.log(`backend server running port ${PORT}`);
});
//
