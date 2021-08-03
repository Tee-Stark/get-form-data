const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require("./routes/route.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', route);

const port = process.env.PORT || 3030;
const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(mongodb_url, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true
})
.then(() => console.log("MONGODB CONNECTED"))
.catch(err => console.error(err));

mongoose.connection.on('open', () => {
        app.listen(port, () => {
        console.log(`Server listening on port: ${port}...`);
    })
});
