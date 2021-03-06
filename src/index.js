const { response } = require('express')
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is running on ' + port);
})



