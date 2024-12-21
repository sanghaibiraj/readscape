const express = require('express')
const app = express()
const cors = require("cors");

const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}));

const bookRoutes = require('./src/books/book.route');

app.use("/api/books", bookRoutes)

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
