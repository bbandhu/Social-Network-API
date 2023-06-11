const mongoose = require('mongoose');
const ReactionSchema = require('./reaction');

const ThoughtSchema = new mongoose.Schema({
    thoughtText: String,
    createdAt: { type: Date, default: Date.now },
    username: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reactions: [ReactionSchema]
});

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;