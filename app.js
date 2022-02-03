const express = require("express");
const projectRouter = require("./modules/project");
const taskRouter = require("./modules/task");
const { connectDb, middlewares } = require("./config");

async function start() {
  try {
    const { PORT } = process.env;
    const app = express();

    await connectDb();
    middlewares(app);
    projectRouter(app);
    taskRouter(app);

    app.listen(PORT, () => console.log(`Server running at: ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = start;
