'use strict';

const mongoose = require("mongoose");

const { Schema } = mongoose;

class User {

    constructor() {
        
        const userSchema = new Schema({
            id: { type: Number, required: true },
            chatId: { type: Number, required: true },
            group: { type: String, required: true },
        });

        userSchema.statics.updateUser = this.updateUser;

        this.User = mongoose.model('User', userSchema);
    }

    updateUser(user) {
        return this.User.updateOne({ id: user.id }, user, { upsert: true });
    }
}

module.exports = new User();
