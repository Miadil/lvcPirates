const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const connection = require("./config/db")
const routes = require("./routes/index")

const app = express()

connection.connect((err) => {
	if (err) {
		console.error("error connecting: " + err.stack)
	} else {
		console.log("database connected")
	}
})

app.use(cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/boats", routes.boats)

app.get("/", (req, res) => {
	res.status(200).send("je suis dans le /")
})
app.listen(4242, console.log(`http://localhost:4242`))
