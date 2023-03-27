require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const route = require('./Router/route');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());

app.use(express.json());


const DB = process.env.DATABASE

mongoose.connect(DB)
.then(() => { console.log("MongoDB is Connected.....") })
.catch ((error) => { console.log(error.message) })


app.get('/', (req, res) => {
    res.send("Working")
})

app.use('/', route);



app.listen(PORT, () => { console.log(`Server Run on ${PORT} ...`)} );

