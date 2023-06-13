const connection = require('../config/connection'); 
const { User } = require('../models/User');
const { Thought } = require('../models/Thought');
const { userSeed } = require('./user-seed');
const { thoughtSeed } = require('./thought-seed');

async function seedDatabase() {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.create(userSeed);
    await Thought.create(thoughtSeed);

    console.log('All done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
}

seedDatabase();