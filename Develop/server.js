// file set up
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
//port
const PORT = 5000
// app and body parser
let app = express();
app.use(bodyParser.urlencoded({
extended: true
}));
//get root route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// get notes route
app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// server check
app.listen(5000, function()
{console.log("NoteApp server is running at port 5000...")
});

