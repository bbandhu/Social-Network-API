const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    reactionId: mongoose.Schema.Types.ObjectId,
    reactionBody: String,
    username: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = ReactionSchema;