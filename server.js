import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(import.meta.dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(import.meta.dirname + '/about.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
