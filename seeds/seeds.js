const connection = require('../config/connection'); 
const User = require('../models/User');
const Thought = require('../models/Thought');
console.log(User);
const userSeed  = require('./user-seed');
const thoughtSeed = require('./thought-seed');

async function seedDatabase() {
    try {
      await User.deleteMany({});
      await Thought.deleteMany({});

      const createdUsers = await User.create(userSeed);

      for (let thought of thoughtSeed) {
        const user = createdUsers.find(user => user.username === thought.username);
        if (!user) {
          console.error(`No user found with username '${thought.username}', skipping thought.`);
          continue;
        }

        const createdThought = await Thought.create({
          thoughtText: thought.thoughtText,
          username: thought.username,
        });

        user.thoughts.push(createdThought);
        await user.save();
      }
  
      console.log('All done!');
      process.exit(0);
    } catch (err) {
      console.error('An error occurred while seeding the database:', err);
      process.exit(1);
    }
}
seedDatabase();