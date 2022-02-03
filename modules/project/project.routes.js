const controllers = require("./project.controllers");
const ROUTES = require("./project.constants");
const express = require("express");

function projectRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getProjects, controllers.getProjects)
    .get(ROUTES.getProjectById, controllers.getProjectById)
    .post(ROUTES.createProject, controllers.createProject)
    .put(ROUTES.updateProject, controllers.updateProject)
    .delete(ROUTES.deleteProject, controllers.deleteProject);

  app.use("/api", router);
}

module.exports = projectRouter;
