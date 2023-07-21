// import Task from "../models/task.model.js";

// export const getTasks = async (req, res) => {
//   const tasksFound = await Task.find({ user: req.user.id }).populate("user");
//   return res.json(tasksFound);
// };

// export const createTask = async (req, res) => {
//   const { title, description, date } = req.body;
//   const newTask = new Task({ title, description, date, user: req.user.id });
//   const savedTask = await newTask.save();
//   return res.json(savedTask);
// };

// export const getTask = async (req, res) => {
//   const taskFound = await Task.findById(req.params.id);
//   if (!taskFound) return res.status(404).json({ message: "task not found" });
//   return res.json(taskFound);
// };

// export const deleteTask = async (req, res) => {
//   const taskDeleted = await Task.findByIdAndDelete(req.params.id);
//   if (!taskDeleted) return res.status(404).json({ message: "task not found" });
//   return res.josn(taskDeleted);
// };

// export const updateTask = async (req, res) => {
//   const taskUpdated = await Task.findOneAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   if (!taskUpdated) return res.status(404).json({ message: "task not found" });
//   return res.josn(taskUpdated);
// };
