// Importing the Express router
const router = require("express").Router();

//import user controller
const userController = require('../../controllers/userController.js');

// Route that matches "/users"
router.route("/")
  // GET request to "/users", run the `getAllUsers` method in the User Controller
  .get(userController.getAllUsers)
  // POST request to "/users", run the `createUser` method in the User Controller
  .post(userController.createUser);

// Route that matches "/users/:id", where ":id" is a placeholder for any specific user id the client is requesting
router
  .route("/:id")
  //GET request to "/users/:id", run the `getUserById` method in the User Controller
  .get(userController.getUserById)
  // PUT request to "/users/:id", run the `updateUser` method in the User Controller
  .put(userController.updateUser)
  //  DELETE request to "/users/:id", run the `deleteUser` method in the User Controller
  .delete(userController.deleteUser);

  //add /create a friend 
  router.route('/:userId/friends/:friendId').post(userController.addFriend);
  //get freinds 
  router.route('/:userId/friends').get(userController.getUserFriends);
  //delete friend
  router.route('/:userId/friends/:friendId').delete(userController.deleteFriend);


module.exports = router;