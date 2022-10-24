const express = require("express");
const router = express.Router();
const taskController = require('../controllers/tasks.controllers')

// Get all tasks
router.get("/task", taskController.getTasks);

// Create a new task
router.post("/task", taskController.postTask);

// Get a task by id
router.get("/task/:id", taskController.getTaskById);

// Update a task
router.put("/task/:id", taskController.putTask);

// delete a task
router.delete("/task/:id", taskController.deleteTask);

module.exports = router;
