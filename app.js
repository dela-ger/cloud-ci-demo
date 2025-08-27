const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hello Cloud</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background: #f4f4f9;
              font-family: Arial, sans-serif;
            }
            h2 {
              font-size: 2.5rem;
              color: #333;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h2>Hello Cloud! I am back again - Updated Via CD/CI</h2>
        </body>
      </html>
    `);
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});