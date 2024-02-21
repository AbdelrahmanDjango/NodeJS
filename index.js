const logger = require('./middleware/logger.js');
const express = require('express');
const members = require('./members.js');
const { Console } = require('console');
const app = express();
// In this line I make logger middleware function globaly, working with every req.
app.use(logger);

app.get('/api/members/', (req,res) => {
    res.json(members);
});

// But this line, using logger in specify function.
app.get('/api/members/:id', logger, (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server running on ${PORT} port.`)});
