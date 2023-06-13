const express = require('express');
const mongoose = require('mongoose');
const app   = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://localhost:27017/mongoosetodoAppDb')
    .then(() => 
    console.log('connected to db')
    ).catch(err => console.log(err));



app.listen(PORT, () => console.log('listening on port ${PORT}'));