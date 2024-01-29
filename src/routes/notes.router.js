const { Router } = require("express");

const notesRoutes = Router();

// Controller
const NotesController = require("../controllers/NotesController");
const notesController = new NotesController();

notesRoutes.post('/:user_id', notesController.create);
notesRoutes.get('/:id', notesController.list);
notesRoutes.delete('/:id', notesController.delete);
notesRoutes.get('/', notesController.listAll);

module.exports = notesRoutes;