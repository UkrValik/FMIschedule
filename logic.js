'use strict';

const User = require("./user");

const greeting = (ctx) => {
    console.log(ctx.message);
    ctx.reply('Привіт! Цей тестовий бот може показати тобі твій розклад. Спочатку вкажи із якої ти групи.');
}

module.exports = { greeting };
