const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const { PORT = 3000, LOCAL_ADDRESS = "0.0.0.0" } = process.env

const app = express()

app.use(express.json())
app.use(cors())

//Import Routes

const postsRoute = require("./routes/posts")

//Routes
app.use("/posts", postsRoute)

app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API TodoApp")
})

//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB !")
})

//Listening

app.listen(PORT, LOCAL_ADDRESS)
