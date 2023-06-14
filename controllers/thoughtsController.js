const Thought = require("../models/Thought");

const thoughtController = {
  // Get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find({});
      return res.json(thoughts);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a single thought by ID
  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'No thought found with this id!' });
      }
      return res.json(thought);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Create a new thought
  createThought: async (req, res) => {
    try {
      const thought = new Thought(req.body);
      const savedThought = await thought.save();
      return res.status(201).json(savedThought);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a thought by ID
  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json(updatedThought);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete a thought by ID
  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.id);
      return res.json(deletedThought);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

    // POST a reaction stored in a single thought's `reactions` array field
   addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    // DELETE to pull and remove a reaction by the reaction's `reactionId` value
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    }

};

module.exports = thoughtController;