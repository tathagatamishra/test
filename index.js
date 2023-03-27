
const express = require('express');
const mongoose = require('mongoose');
const route = require('./Router/route');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://new_user:jk1BBWwmxQpZ31zO@cluster0.pxvwsjp.mongodb.net/sharetext")
.then(() => { console.log("MongoDB is Connected.....") })
.catch ((error) => { console.log(error.message) })


app.get('/', (req, res) => {
    res.send("Working")
})

app.use('/', route);



app.listen(PORT, () => { console.log(`Server Run on ${PORT} ...`)} );

