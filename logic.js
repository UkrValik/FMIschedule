'use strict';

const User = require("./user");

const groups = ["401-А", "401-Б"];

const greeting = (ctx) => {
    ctx.reply('Привіт! Цей тестовий бот може показати тобі твій розклад. Спочатку вкажи із якої ти групи.');
}

const setGroup = (ctx) => {
    const group = ctx.message.text.split('/group ')[1];
    if (groups.includes(group)) {
        const user = {
            id: ctx.message.from.id,
            chat_id: ctx.message.chat.id,
            group: group,
        };
        User.updateUser(user);
        ctx.reply("Супер! Запам'ятав твою групу: " + user.group);
    } else {
        ctx.reply("Нема такої групи.")
    }
}

module.exports = { greeting, setGroup };
