require("dotenv").config()
// require("./DL/scripts_data/script_lang")
const cors = require("cors")
const express = require("express")
const app = express()
const PORT = process.env.PORT

// app.use(express.static('..'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("./Router")(app)

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`))
