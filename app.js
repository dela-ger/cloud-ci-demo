const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Cloud! I am back again - Updated Via CD/CI');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});