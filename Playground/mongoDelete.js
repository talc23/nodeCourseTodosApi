// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err){
    return console.log('Connection Failed');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({
  //   text: "Eat lunch"
  // }).then((res)=>{
  //   console.log(res)
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({
  //   text: "Eat lunch"
  // }).then((res)=>{
  //   console.log(res)
  // })

  db.collection('Users').find().toArray().then((docs)=>{
    console.log('Todos');

  }, (err) =>{
    console.log('Unable to fetch Todos', err)
  })

  //db.close();
});
