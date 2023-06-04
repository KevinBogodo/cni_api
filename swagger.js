const swaggerAutogen = require('swagger-autogen')()

const outputFile = './docs/swagger_output.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./app.js')
})