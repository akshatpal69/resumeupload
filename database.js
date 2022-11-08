let mysql = require("mysql2")
const ENV = require("./env")

let connection = mysql.createConnection({
  user: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME,
  host: ENV.DB_SERVER,
  port: ENV.DB_PORT,
})

connection.connect(function (err) {
  if (err) {
    if (err.fatal == true) {
      console.log(`FATAL ERROR ${err.message}`)
      console.log(
        `tried connection with ${ENV.DB_SERVER} at port ${ENV.DB_PORT} with database ${ENV.DB_NAME}`
      )
      console.log(`MYSQL SERVER NOT REACHABLE`)
    } else {
      console.log(`error:  ${err.code} ${err.message}`)
    }
  } else {
    console.log(
      `Connected to ${ENV.DB_SERVER} at port ${ENV.DB_PORT} with database ${ENV.DB_NAME}`
    )
  }
})


module.exports = connection
