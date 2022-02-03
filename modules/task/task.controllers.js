const Task = require("./task.model");
const mongoose = require("mongoose");

function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getTasks(req, res) {
  try {
    const tasks = await Task.find().lean();
    res.status(200).json(tasks).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function getTaskById(req, res) {
  try {
    const { taskId } = req.params;
    if (!isObjectId(taskId)) {
      res.status(400).json("Id not valid").end();
    }
    const task = await Task.findById(taskId).populate("tasks").lean();
    res.status(200).json(task).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function updateTask(req, res) {
  try {
    const { taskId } = req.params;
    if (!isObjectId(taskId)) {
      res.status(400).json("Id not valid").end();
    }
    const task = await Task.findByIdAndUpdate(req.body, {
      new: true,
    }).lean();

    res.status(200).json(task).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function deleteTask(req, res) {
  try {
    const { taskId } = req.params;
    if (!isObjectId(taskId)) {
      res.status(400).json("Id not valid").end();
    }
    const task = await Task.findByIdAndDelete(taskId).lean();
    res.status(200).json(task).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

module.exports = {
  getTaskById,
  getTasks,
  updateTask,
  createTask,
  deleteTask,
};
