const { MongoClient } = require("mongodb");
require('dotenv').config()

const url = process.env.URL_CONNECT_DB;
const dbName = "phuclong_coffee";


async function connectDb() {
    const client = new MongoClient(url);
    await client.connect();
    console.log("Kết nối thành công đến server");
    console.log(url);
    return client.db(dbName);
}
module.exports = connectDb;