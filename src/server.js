const http = require("http")
const index = require("./index")

const port = process.env.EXPRESS_PORT || 3000

const server = http.createServer(index)

server.listen(port, () => console.log(`Listening on port: ${port}`))
