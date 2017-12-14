const express = require('express');
var path = require('path');

var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('signup');
});

app.listen(8080, () => {
    console.log(" The Mesh is now running at http://localhost:8080 ");
  });