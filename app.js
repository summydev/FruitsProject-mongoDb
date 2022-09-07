const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});
// const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String,
// });
// const Fruit = mongoose.model("Fruit", fruitSchema);
// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "The applle taste good but looks ugly",
// });
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Person = mongoose.model("person", personSchema);
const person = Person({
  name: "summydev",
  age: 15,
});
person.save();

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});
const Fruit = new mongoose.model("fruit", fruitSchema);
const kiwi = Fruit({
  name: "kiwi",
  rating: 2,
  review: "tastes good..hmmm...",
});
const mango = Fruit({
  name: "mango",
  rating: 2,
  review: "tastes good..hmmm...",
});
const fruit = Fruit({
  name: "peach",
  rating: 9,
  review: "tastes good..hmmm...",
});
fruit.save();
// Fruit.insertMany([kiwi, mango], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully saved the fruits");
//   }
// });
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// const findDocuments = function (db, callback) {
//   const collection = db.collection("fruits");
//   collection.find({}).toArray(function (err, fruits) {
//     assert.equal(err, null);
//     console.log("found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
