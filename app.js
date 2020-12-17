const express = require('express')
const app = express();
const userRouter = require('./routes/userRoute')
const response = require('./utils/response')

//middilewares

app.use(express.json())


app.use('/user', userRouter)



//Error MiddleWare
app.use((err, req, res, next) => {
    err.message = err.message || "Something went wrong - 😌";
    res.status(500).json(response('failed', err.message))
})

// dead end route
app.use("*", (req, res) => {
    res.status(404).json(response('failed', "You're trying to access a route that doesn't exist...🙄 "))
})

module.exports = app