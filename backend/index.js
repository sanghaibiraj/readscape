const express = require('express')
const app = express()

const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT || 5000;

async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
}

//sanghaibiraj
//UhjGNXPy87G4QZVI


main().then(() => console.log("MongoDb connected successfully")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
