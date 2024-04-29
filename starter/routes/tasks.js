const express = require('express')
const Task = require('../model/task')
const router = express.Router()

const {getAllTask,createTask,getTask,UpdateTask,deleteTask} = require('../controllers/tasks')

const { getAllTasks } = require("../controllers/tasks")

router.route('/').get(getAllTask).post(createTask)

router.route('/:id').get(getTask).patch(UpdateTask).delete(deleteTask)
module.exports = router