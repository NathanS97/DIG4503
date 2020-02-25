const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb+srv://nathansnodgrass:39AuPiLZxNMODO7M@cluster0-tc9sb.mongodb.net/";

class Database {
  constructor() {
    this.connection = null;

    MongoClient.connect(URL, (error, connection) => {
      if (error) {
        throw error;
      }

      this.connection = connection;

      let database = connection.db("DIG4503-77");
      let collection = database.collection("Movies");

      this.collection = collection;

    });
  }
  findOne() {
    if (this.collection != null) {
      this.collection.findOne({ "title": title }, {}, function (error, result) {
        console.log(result);
      });
    } else {
      return null;
    }
  }
}

module.exports = Database;