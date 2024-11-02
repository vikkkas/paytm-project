const express = require("express");
const app = express();
const {connectDB} = require('./db/db')
const Router = require('./routes/routes')
const port = 3000;
const cors = require('cors');


app.use(express.json());
app.use(cors());


app.use('/api/v1', Router);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

connectDB();



