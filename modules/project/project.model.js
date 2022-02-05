const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  owner: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model("Project", projectSchema);
