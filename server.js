const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/bti425-a3-amerzanian'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/bti425-a3-amerzanian/index.html'));});
app.listen(process.env.PORT || 8080);