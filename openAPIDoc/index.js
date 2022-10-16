const express = require('express')
const app = express()
const swaggerUI = require('swagger-ui-express')
const swaggerJSON = require('./openapi.json')

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON))

app.listen('9000', () => {
    console.log("running at port 9000")
})