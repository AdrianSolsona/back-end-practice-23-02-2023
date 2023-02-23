const express = require("express");
const db = require('./db/db')
const { sequelize } = require("./models/index");

const app = express();

const PORT = 3000;

app.use(express.json())

app.listen(PORT, ()=> {
    console.log(`levantado servirdor en el puerto ${3000}`)
    //sequelize.sync({force:true})
    db.authenticate()
    .then(() => {
        console.log("Connected to the database, sync is ok");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
})