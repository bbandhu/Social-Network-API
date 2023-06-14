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

Feel free to customize this description to match the specific features and functionality of your Social Network API project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Features](#features)
- [Technogies](#technologies Used)

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

/users
GET: Get all users.
POST: Create a new user.
PUT: Update a user.
DELETE: Delete a user.
/users/:id
GET: Get a user by ID.
PUT: Update a user by ID.
DELETE: Delete a user by ID.
/thoughts
GET: Get all thoughts.
POST: Create a new thought.
PUT: Update a thought.
DELETE: Delete a thought.
/thoughts/:id
GET: Get a thought by ID.
PUT: Update a thought by ID.
DELETE: Delete a thought by ID.


