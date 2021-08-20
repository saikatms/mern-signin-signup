const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } = require("./config");

module.exports = {
  // MongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`
  MongoURI: `mongodb+srv://saikat:saikat@cluster0.lr5m3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
