# Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The Social Network API is a backend application that provides the functionality to manage users, thoughts, and their interactions in a social network. It allows users to create accounts, share their thoughts, add friends, and interact with other users in the network.

With the Social Network API, users can perform the following actions:

Create a new user account
Get a list of all users
Get a specific user by ID
Update user information
Delete a user account
Add friends to a user's friend list
Create a new thought
Get a list of all thoughts
Get a specific thought by ID
Update thought content
Delete a thought
The API utilizes Express.js as the web framework for handling HTTP requests, MongoDB as the database to store user and thought data, and Mongoose as the object modeling tool for MongoDB. It provides a RESTful API interface that supports common CRUD operations for managing users and thoughts.

The Social Network API is a powerful tool for building social networking applications, enabling developers to focus on the frontend and user experience while leveraging the robust backend functionality provided by the API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Features](#features)
- [TechnogiesUsed](#TechnologiesUsed)

## Installation

Clone the repository.
Install the dependencies using npm install.
Set up the database connection in the server.js file.
Start the application using npm start or node server.js.

## Usage

Download the project and follow the above instructions and ready to use all these end points/API routes

## contributors

Bandhavi Bendi

## License

    this project is licensed under MIT License

## Technologies

Node.js
Express.js
MongoDB
Mongoose

## Features

 API Routes
* getAllUsers: Retrieves all users
* createUser: Creates a new user
* getUserById: Retrieves a user by their ID
* updateUser: Updates a user by their ID
* deleteUser: Deletes a user by their ID
* addFriend: Adds a friend to a user's friends list
* getUserFriends: Retrieves a user's friends
* GET /api/thoughts to get all thoughts.
* POST /api/thoughts to create a new thought.
* GET /api/thoughts/:id to get a thought by its id.
* PUT /api/thoughts/:id to update a thought by its id.
* DELETE /api/thoughts/:id to delete a thought by its id.
* POST /api/thoughts/:thoughtId/reactions to add a reaction to a specific thought.
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId to remove a reaction 

Screenshots
![Image](https://github.com/bbandhu/Social-Network-API/blob/main/assests/Screenshot1.png)
![Image](https://github.com/bbandhu/Social-Network-API/blob/main/assests/Screenshot2.png)
![Image](https://github.com/bbandhu/Social-Network-API/blob/main/assests/Screenshot3.png)