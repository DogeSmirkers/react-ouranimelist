let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
var AWS = require("aws-sdk");
const app = express();
const port = 3000;

app.use(express.json());
app.use('/user', require('./routes/user'));

// listening port
app.listen(port, () => {
    console.log(`Backend Listening at Port ${port}`)
});