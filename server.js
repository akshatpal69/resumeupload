const express = require("express")
const app = express()
const port = process.env.PORT || 3000;
const country_list = require('./countries')
const path = require("path")
const cors = require('cors')
const uploadRoute = require("./routes/upload")
// const morgan = require('morgan')
//middleware
app.use(express.json())
// app.use(morgan("dev"))
app.use(cors({ origin: "*" }));



app.use("/api", uploadRoute)
app.use("/api/countries", (req, res)=>{
    return res.status(200).json({ country_list })
})
app.use("/", express.static(path.join(__dirname, "public")))


app.listen(port, () => {
  console.log("app running on http://localhost:80")
})
