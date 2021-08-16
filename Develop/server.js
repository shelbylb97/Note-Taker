// file set up
const express = require('express')
const bodyParser = require('body-parser')
//port
const PORT = 5000
// app and body parser
let app = express();
app.use(bodyParser.urlencoded({
extended: true
}));
// server check
app.listen(5000, function()
{console.log("NoteApp server is running at port 5000...")
});

