const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require("helmet");
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());


app.get('/', function (req, res) {
  res.send('Hello from Muhsin')
});

//router
app.use("/routers", require("./routers/router1"));

const port = process.env.PORT || 3100;


app.listen(port, ()=>{
  console.log(`Server is running on port: http://localhost:${port}`);
});