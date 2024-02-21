const logger = require('./middleware/logger.js');
const express = require('express');

const app = express();

// app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/api/members/', require('./routes/api/members.js'))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server running on ${PORT} port.`)});