const express = require('express');
const path = require('path');

const app = express();

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
