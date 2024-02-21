const logger = require('./middleware/logger.js');
const express = require('express');
const members = require('./members.js');
const { Console } = require('console');
const app = express();
app.use(logger);

app.get('/api/members/', (req,res) => {
    res.json(members);
});

app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server running on ${PORT} port.`)});