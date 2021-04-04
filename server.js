const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '/dist')));
app.use('/static', express.static(path.join(__dirname, '/static')));

app.use("/", function(request, response){
  response.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}!`);
});
