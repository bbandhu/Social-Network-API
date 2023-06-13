// Importing the Express router
const router = require("express").Router();

// Importing the Thought Controller, which includes the methods for each of the routes
const thoughtController =require('../../controllers/thoughtsController.js');

// Defining a route that matches "/thoughts"
router
  .route("/thoughts")
  //  GET request to "/thoughts", run the `getAllThoughts` method from the Thought Controller
  .get(thoughtController.getAllThoughts)
  //  POST request to "/thoughts", run the `createThought` method from the Thought Controller
  .post(thoughtController.createThought);

// Defining a route that matches "/thoughts/:id", where ":id" is a placeholder for any specific thought id the client is requesting
router
  .route("/thoughts/:id")
  // GET request to "/thoughts/:id", run the `getThoughtById` method from the Thought Controller
  .get(thoughtController.getThoughtById)
  // PUT request to "/thoughts/:id", run the `updateThought` method from the Thought Controller
  .put(thoughtController.updateThought)
  // DELETE request to "/thoughts/:id", run the `deleteThought` method from the Thought Controller
  .delete(thoughtController.deleteThought);

// Export the router to be utilized in other parts of the app
module.exports = router;