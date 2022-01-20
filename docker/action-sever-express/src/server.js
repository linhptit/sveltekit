const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios")
const {isEmpty} = require("lodash");
const data = require('./data/data.json')

const app = express();

const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

function getLongTails(tail) {
  return axios.get(`http://host.docker.internal:8080/api/rest/long-tail-by-tail/${tail}`);
}


// Request Handler
app.post('/getLongTailByTail', async (req, res) => {
  try {
    // get request input
    const { tail } = req.body.input;

    const { data: longTails } = await getLongTails(tail)
    const customData = longTails.long_tails
    if (isEmpty(customData)) return res.status(200)
    const longTail = customData[0]
    return res.json({
      ...longTail,
      ...data.find(i => i.id === longTail.json_id)
    })
  } catch (e) {
    return res.status(400).json({
      message: "error happened"
    })
  }
});

app.listen(PORT);
