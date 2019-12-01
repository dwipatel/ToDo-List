const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

const mongoose = require('mongoose');
let db_url = "mongodb+srv://Admin:Admin@cluster0-o8ivn.mongodb.net/test?retryWrites=true&w=majority";
let mongodb = db_url;
mongoose.connect(mongodb);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function() {
    console.log('Connected to database');
});
db.on('disconnected', function() {
    console.log('Disconnected from database');   
});


app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});