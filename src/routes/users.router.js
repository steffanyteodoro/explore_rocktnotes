const { Router } = require("express");

const userRoutes = Router();

// Controller
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();

userRoutes.post('/', usersController.create);
userRoutes.put('/:id', usersController.update);

module.exports = userRoutes;