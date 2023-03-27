const express = require('express');
const mongoose = require('mongoose');
const route = require('./Router/route');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());

app.use(express.json());
mongoose.connect('mongodb+srv://aashu:root@mini-project-cluster.kzrvbeg.mongodb.net/ATxt-Share?retryWrites=true&w=majority')
.then(() => { console.log("MongoDB is Connected.....") })
.catch ((error) => { console.log(error.message) })


app.get('/', (req, res) => {
    res.send("Working")
})

app.use('/', route);



app.listen(PORT, () => { console.log(`Server Run on ${PORT} ...`)} );

