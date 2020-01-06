const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello, World!' }));

app.listen(port, () => console.log(`API running on port ${port}`));