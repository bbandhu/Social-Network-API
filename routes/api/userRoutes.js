// Importing the Express router
const router = require("express").Router();

// Importing the User Controller, which contains the methods for each of the routes
const userController = require("../controllers/userController");

// Route that matches "/users"
router
  .route("/users")
  // GET request to "/users", run the `getAllUsers` method in the User Controller
  .get(userController.getAllUsers)
  // POST request to "/users", run the `createUser` method in the User Controller
  .post(userController.createUser);

// Route that matches "/users/:id", where ":id" is a placeholder for any specific user id the client is requesting
router
  .route("/users/:id")
  //GET request to "/users/:id", run the `getUserById` method in the User Controller
  .get(userController.getUserById)
  // PUT request to "/users/:id", run the `updateUser` method in the User Controller
  .put(userController.updateUser)
  //  DELETE request to "/users/:id", run the `deleteUser` method in the User Controller
  .delete(userController.deleteUser);

module.exports = router;