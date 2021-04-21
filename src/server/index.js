var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
let bodyParser = require('body-parser')
let cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
var FormData = require('form-data');
const fetch = require('node-fetch')

const PORT = 8081
const apiKey = process.env.API_KEY
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1'


const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.static('dist'))


// TODO: Configure cors to avoid cors-origin issue
// TODO: Configure express to use body-parser as middle-ware.

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/submit', cors(), function(req, res){
    console.log({url: req.body})
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("url", req.body);
    formdata.append("lang", "en");

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch(baseURL, requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));
})
// a route that handling post request for new URL that coming from the frontend
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
