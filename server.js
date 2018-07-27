// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/api/timestamp/:time", function (req, res) {
  var input = req.params.time;
  if(isNaN(new Date(Number(input)))===true&&isNaN(new Date(input))) {
    res.json({error:"Invalid Date"})
  } else {
  if (input==Number(input)) {
    input = Number(input)
    console.log(input)
  }
  var date = new Date(input)
  res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
  }
  
});

app.get(/api\/timestamp\/?/, function(req,res) {
    var date = new Date();
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
})

app.get("/", function(req,res) {
  res.sendFile(__dirname + '/views/index.html')
})

// http://expressjs.com/en/starter/basic-routing.html


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});