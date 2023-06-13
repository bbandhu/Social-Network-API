const User = require("../models/User");

const userController = {
  // Get all users
  // This function retrieves all users from the User collection in the database.
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a single user by ID
  // This function retrieves a specific user using their unique ID.
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Create a new user
  // This function adds a new user to the User collection in the database.
  createUser: async (req, res) => {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      return res.status(201).json(savedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a user by ID
  // This function updates the data of a specific user using their unique ID.
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete a user by ID
  // This function removes a specific user from the User collection using their unique ID.
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      return res.json(deletedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;