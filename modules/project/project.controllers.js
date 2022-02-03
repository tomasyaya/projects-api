const Project = require("./project.model");
const mongoose = require("mongoose");

function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getProjects(req, res) {
  try {
    const projects = await Project.find().populate("tasks").lean();
    res.status(200).json(projects).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function getProjectById(req, res) {
  try {
    const { projectId } = req.params;
    if (!isObjectId(projectId)) {
      res.status(400).json("Id not valid").end();
    }
    const project = await Project.findById(projectId).populate("tasks").lean();
    res.status(200).json(project).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function createProject(req, res) {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function updateProject(req, res) {
  try {
    const { projectId } = req.params;
    if (!isObjectId(projectId)) {
      res.status(400).json("Id not valid").end();
    }
    const project = await Project.findByIdAndUpdate(projectId, req.body, {
      new: true,
    }).lean();

    res.status(200).json(project).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function deleteProject(req, res) {
  try {
    const { projectId } = req.params;
    if (!isObjectId(projectId)) {
      res.status(400).json("Id not valid").end();
    }
    const project = await Project.findByIdAndDelete(projectId).lean();
    res.status(200).json(project).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

module.exports = {
  getProjectById,
  getProjects,
  updateProject,
  createProject,
  deleteProject,
};
