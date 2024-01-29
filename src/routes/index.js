const { Router } = require("express");

// Rotas
const usersRouter = require("./users.router");
const notesRouter = require("./notes.router");
const tagsRouter = require("./tags.router");

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/notes', notesRouter);
routes.use('/tags', tagsRouter);

module.exports = routes;