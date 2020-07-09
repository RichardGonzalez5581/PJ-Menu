const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// Start Express
const app = express()

// Middle ware
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static(__dirname + "/../public"))

module.exports = app
