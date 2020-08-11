const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('coofoi menó!');
});

app.listen(8080);