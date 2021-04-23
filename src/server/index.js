var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
var FormData = require('form-data');
const fetch = require('node-fetch')

const PORT = 8081
const apiKey = process.env.API_KEY
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'


const app = express()
app.use(express.static('dist'))

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/submit', function(req, res){
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", req.body.url);
    formdata.append("lang", "en");

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch(baseURL, requestOptions)
  .then(response => {
    return response.json()
  })
  .then((data) => {
    const result = {
      text: data[0].text,
      score_tag: data.score_tag,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      irony: data.irony
    }
    res.json(result)
  })
  .catch(error => console.log('error', error));
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app