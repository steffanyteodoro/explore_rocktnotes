const { Router } = require("express");

const tagsRoutes = Router();

// Controller
const TagsController = require("../controllers/TagsController");
const tagsController = new TagsController();

tagsRoutes.get('/:user_id', tagsController.ListAll);

module.exports = tagsRoutes;
