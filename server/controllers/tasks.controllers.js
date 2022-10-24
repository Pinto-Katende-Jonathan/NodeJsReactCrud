const Task = require("../models/task.model");

async function getTasks(req, res){
    const tasks = await Task.findAll();
  
    res.status(200).json(tasks);
  }

  async function postTask(req, res){
    // console.log(req.body)
    const { nom, quantity } = req.body;
  
    if (!nom.trim() || !quantity) {
      return res.status(400).json({
        error: "some fields are empties",
      });
    }
    const newTask = Task.build({
      nom: nom,
      quantity: quantity,
    });
  
    try {
      await newTask.save();
  
      res.status(201).json(newTask);
    } catch (error) {
      res.json(error);
    }
  }

  async function getTaskById(req, res){
    const task = await Task.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
  
    if (task) {
      return res.status(200).json(task);
    }
    return res.status(404).json({
      error: "Task doesn't exist",
    });
  }

  async function putTask(req, res){
    const task = await Task.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
  
    const { nom, quantity } = req.body;
    
    if (!nom.trim() || !quantity){
      return res.status(404).json({msg: "Task doesn't exist",});
    }
    else{
      await task.set({
        nom : nom,
        quantity: quantity,
      })
  
      await task.save()
      return res.status(200).json(task)
    }
  }

  async function deleteTask(req, res){
    const task = await Task.findOne({
      where: {
        id: parseInt(req.params.id),
      },
    });
  
    if (task) {
      await task.destroy();
  
      res.status(204).json({msg:"Deleted successfully !", });
    } else {
      return res.status(404).json({
        error: "Task Not Found",
      });
    }
  }

  module.exports={
    getTasks,
    postTask,
    getTaskById,
    putTask,
    deleteTask,
  };