const {Schema} = require('mongoose');

const ReactionSchema = new Schema({
  reactionBody: String,
  username: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ReactionSchema;