// file set up
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const util = require('util');\
const fs = require('fs');
//port
const PORT = 5000

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

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

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

  const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };


// GET Route for retrieving notes
app.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
// server check
app.listen(5000, function()
{console.log("NoteApp server is running at port 5000...")
});

