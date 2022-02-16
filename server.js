const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/api', apiRoutes);

//default response for any other request (Not Found)
//has to be the last one otherwise it will override all others
app.use((req, res) => {
    res.status(404).end();
});

//start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connect.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})

