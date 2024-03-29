const express =  require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require('./routes/index');
// DB Connexion
require("./database/connexion");
// Docs
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/swagger_output.json')

const app = express();
const port = process.env.PORT || 3000;  // 'process.env.PORT' for easly switch in production



// Midleware
app.use(cors())
    .use(bodyParser.json())
    .use(router)
    .use(bodyParser.urlencoded({extended: true}))
    .use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.listen(port, err => {
    if (err) return console.log(`Cannot Listen on Port: ${port}`);
    console.log(`Notre application node is start on : http://localhost:${port}`)
});
