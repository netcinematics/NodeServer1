const express = require('express');
const app = express();
const port = 3000;

//INSTRUCTION:
//node minimumAPI
//http://localhost:3000/msg1

app.get('/', (req, res) => {
  res.send('Holo, wurldz!');
});

app.get('/msg1', (req, res) => {
  res.send('msg1');
});

app.listen(port, () => {
  console.log(`Server at at http://localhost:${port}`);
});
