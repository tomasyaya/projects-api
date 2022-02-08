const fileUploader = require("./files.config").single("imageUrl");
const express = require("express");
const controllers = require("./files.controllers");

const ROUTES = {
  uploadImage: "/image-upload",
};

function filesRouter(app) {
  const router = express.Router();

  router.post(ROUTES.uploadImage, fileUploader, controllers.updloadImage);

  app.use("/api", router);
}

module.exports = filesRouter;
