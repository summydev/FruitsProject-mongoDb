const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017";
const dbName = "fruits";
const client = new MongoClient(url);
client.connect(function (err) {
  assert.equal(null, err);
  console.log("connected tothe server");

  const db = client.db(dbName);
  findDocuments(db, function () {
    client.close();
  });
});

const insertDocument = function (db, callback) {
  const collection = db.collection("fruits");
  collection.insertMany(
    [
      { fruit: "Apples", review: "very sweet" },
      { fruit: "Oranges", review: "sour" },
      { fruit: "banana", review: "sweet" },
    ],
    function (err, result) {
      assert.equal(err, null);
      // assert.equal(3, result.result.n);
      // assert.equal(3, result.ops.length);
      console.log("Inserted 3 documentsinto the collection");
      callback(result);
    }
  );
};
const findDocuments = function (db, callback) {
  const collection = db.collection("fruits");
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log("found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
