// Importing the Express router
const router = require("express").Router();

// Importing the Thought Controller, which includes the methods for each of the routes
const thoughtController =require('../../controllers/thoughtsController.js');

// Defining a route that matches "/thoughts"
router.route("/")
  //  GET request to "/thoughts", run the `getAllThoughts` method from the Thought Controller
  .get(thoughtController.getAllThoughts)

  //  POST request to "/thoughts", run the `createThought` method from the Thought Controller
  .post(thoughtController.createThought);

// Defining a route that matches "/thoughts/:id", where ":id" is a placeholder for any specific thought id the client is requesting
router
  .route("/:id")
  // GET request to "/thoughts/:id", run the `getThoughtById` method from the Thought Controller
  .get(thoughtController.getThoughtById)

  // PUT request to "/thoughts/:id", run the `updateThought` method from the Thought Controller
  .put(thoughtController.updateThought)

  // DELETE request to "/thoughts/:id", run the `deleteThought` method from the Thought Controller
  .delete(thoughtController.deleteThought);

// POST a reaction stored in a single thought's `reactions` array field
router.route('/:thoughtId/reactions').post(thoughtController.addReaction);

//delete a reaction stored in a single thought's `reactions` array field
router.route('/:thoughtId/reactions/:reactionId').delete(thoughtController.deleteReaction);

// Export the router to be utilized in other parts of the app
module.exports = router;