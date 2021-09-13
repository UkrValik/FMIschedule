const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://fmi_bot:IjDWpEXik0sqVgaZ@cluster0.z68qj.mongodb.net/fmi_schedule?retryWrites=true&w=majority");

const app = express();

app.get('', (req, res) => {
    res.status(200).send('Ok');
});

app.listen(process.env.PORT || 3000, () => console.log('Ok'));
