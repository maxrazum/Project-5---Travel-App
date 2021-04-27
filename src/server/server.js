const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const fetch = require("node-fetch");
const cors = require('cors');

// instantiate app
const app = express();
app.use(express.static('dist'));
app.use(cors());

/*Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
const PORT = process.env.PORT || 8081
server = app.listen(PORT, console.log(`Travel App listening on port ${PORT}`));

// POST request to GEONAMES API to fetch data
app.post('/location', async(req, res) => {
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${req.body.city}&maxRows=1&username=${process.env.GEONAMES_KEY}`);
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log('error', error);
    }
});
// POST request to WEATHERBIT API to fetch data
app.post('/weather', async(req, res) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.lng}&key=${process.env.WEATHERBIT_KEY}`);
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log('error', error);
    }
});
// POST request to PIXABAY API to fetch data
app.post('/picture', async(req, res) => {
    const response = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.body.city}&image_type=photo&orientation=horizontal&per_page=3&pretty=true`);
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log('error', error);
    }
});
