'use strict';

const express = require("express");
const mongoose = require("mongoose");
const { Telegraf } = require("telegraf");
const { greeting, setGroup } = require("./logic");

const botToken = "1912321731:AAGdN_HjxhvqE-hCiAe8bFDLtLOXzcTQRdY";

const bot = new Telegraf(botToken);

mongoose.connect("mongodb+srv://fmi_bot:IjDWpEXik0sqVgaZ@cluster0.z68qj.mongodb.net/fmi_schedule?retryWrites=true&w=majority").then(
    () => {
        bot.command('start', (ctx) => greeting(ctx));
        bot.command('group', (ctx) => setGroup(ctx));
        bot.launch();
    },
    (err) => {
        console.log(err);
    }
);

const app = express();

app.get('', (req, res) => {
    res.status(200).send('Ok');
});

app.listen(process.env.PORT || 3000, () => console.log('Ok'));
