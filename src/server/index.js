const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');

// instantiate app
const app = express();
app.use(express.static('dist'));
app.use(cors())

/*Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
const PORT = process.env.PORT || 8081
server = app.listen(PORT, console.log(`Analyzer App listening on port ${PORT}`))

// POST request to API to fetch data
app.post('/apiData', async(req, res) => {
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${req.body.formUrl}`);
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("error", error);
    }
});