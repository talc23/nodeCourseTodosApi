// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err){
    return console.log('Connection Failed');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a0da663bc21642ff426f9e3")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) =>{
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a0e15b36b9f1d39340f2824")
  }, {
    $set: {
      name: "Talke"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) =>{
    console.log(result)
  })
  //db.close();
});
