
const {mongoose, Types} = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    thoughts: [{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Thought'
         }],
    friends: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
     }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;