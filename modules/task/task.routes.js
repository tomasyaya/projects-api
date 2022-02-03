const controllers = require("./task.controllers");
const ROUTES = require("./task.constants");
const express = require("express");

function taskRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getTasks, controllers.getTasks)
    .get(ROUTES.getTaskById, controllers.getTaskById)
    .post(ROUTES.createTask, controllers.createTask)
    .put(ROUTES.updateTask, controllers.updateTask)
    .delete(ROUTES.deleteTask, controllers.deleteTask);

  app.use("/api", router);
}

module.exports = taskRouter;
