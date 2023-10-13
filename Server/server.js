import express from "express"
import ViteExpress from 'vite-express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from "./controller.js"

//Routes
app.get('/events', handlerFunctions.getEvent)





//opening the server

ViteExpress.listen(app,6969,()=> console.log(`listening on http://localhost:6969`))