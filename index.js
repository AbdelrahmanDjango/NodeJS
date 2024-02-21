const logger = require('./middleware/logger.js');
const express = require('express');
const members = require('./members.js');
const app = express();

// In this line I make logger middleware function globaly, working with every req.
app.use(logger);

app.get('/api/members/', (req,res) => {
    res.json(members);
});

// But this line, using logger in specify function.
app.get('/api/members/:id', logger, (req, res) => {


// Filter is a function takes member parameter (or any name, I can put 7amada.id).
// And make validation (id of object ?= id in route).
    filteredMembers = (members.filter(member => member.id === parseInt(req.params.id)));

    if (filteredMembers.length === 0) {
        res.status(404).json({ error: 'Id not found.' });
    } else {
        res.json(filteredMembers);
    }
    
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server running on ${PORT} port.`)});