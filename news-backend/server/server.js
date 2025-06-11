require('dotenv').config(); 
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT; 

const mongoDBURI = process.env.MONGODB_URI

mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.error("Connection Error:", err));

app.listen(PORT, () => {
    // console.log(`Server started at port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Connected to MongoDB!');
    // console.log("Mongo DB connected!");
});