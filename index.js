const express = require("express");
const mongoose = require("mongoose");
const TelegramBot = require("node-telegram-bot-api");

mongoose.connect("mongodb+srv://fmi_bot:IjDWpEXik0sqVgaZ@cluster0.z68qj.mongodb.net/fmi_schedule?retryWrites=true&w=majority");

const botToken = "1912321731:AAGdN_HjxhvqE-hCiAe8bFDLtLOXzcTQRdY";

const bot = new TelegramBot(botToken, { polling: true });

bot.onText('/start', (msg) => {
    bot.sendMessage(msg.chat.id, 'Привіт! Цей тестовий бот може показати тобі твій розклад. Спочатку вкажи із якої ти групи.');
});

const app = express();

app.get('', (req, res) => {
    res.status(200).send('Ok');
});

app.listen(process.env.PORT || 3000, () => console.log('Ok'));
