const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const URL = "mongodb://127.0.0.1:27017";

// also use for connecting the mongodb to the server
const client = new MongoClient(URL);      // for sending the data to the database

app.listen(5100, function (req, res) {

    console.log('Server is running on port 5100');

});


app.use((req,res,next) => {

    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

    next();

})


app.get("/", function (req, res) {

    res.send("Marvellous Server is Updated...");

});


app.get('/getBatches', getConnection);

// async function getConnection(req,res){

//     let result = await client.connect();        // (.connect) method is only use to connect the mongodb to server
//     let db = result.db("Marvellous");
//     let collection = db.collection("Batches");
//     let resp = await collection.find({}).toArray();
//     console.log(resp);
//     res.send(resp);

// }

// getConnection();

async function getConnection(req, res) {
    try {
        let result = await client.connect();
        let db = result.db("Marvellous");
        let collection = db.collection("Batches");
        let resp = await collection.find({}).toArray();
        console.log(resp);
        res.send(resp);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
}