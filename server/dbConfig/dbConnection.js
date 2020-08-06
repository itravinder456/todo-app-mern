const mongoose = require('mongoose')
require('dotenv').config()
const dbConnection = async () => {
    try {


        // ####################################

        // const MongoClient = require('mongodb').MongoClient;
        // const uri = "mongodb+srv://nani:asdf@1234@portfolio-qhmju.mongodb.net/TodoApp?retryWrites=true&w=majority";
        // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        // client.connect(err => {
        //     // const collection = client.db("test").collection("devices");
        //     console.log("connected to atlas")
        //     client.close();
        // });


        // #########################################

        /**
         * MongoDB Connection
         */
        const mongodbURL = "mongodb+srv://nani:asdf@1234@portfolio-qhmju.mongodb.net/TodoApp?retryWrites=true&w=majority";
        //Set up default mongoose connection
        mongoose.connect(mongodbURL, {
            useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
        });

        // Get Mongoose to use the global promise library
        mongoose.Promise = global.Promise;

        //Get the default connection
        const db = mongoose.connection;
        db.once('open', () => console.log('connected to the database', db.name));

        // checks if connection with the database is successful
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

        // db.listCollections().toArray(function (err, collInfos) {
        //     console.log(collInfos);
        //     // collInfos is an array of collection info objects that look like:
        //     // { name: 'test', options: {} }
        // });

        // #########################################

    } catch (error) {
        console.log("error", error)
    }

}
module.exports = dbConnection
