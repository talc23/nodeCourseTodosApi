// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err){
    return console.log('Connection Failed');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a0e9dcf1eb8d6c3ada6fa21")
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) =>{
  //   console.log('Unable to fetch Todos', err)
  // })

  // db.collection('Todos').find().count().then((num)=>{
  //   console.log(`Todos Count: ${num}`);
  // }, (err) =>{
  //   console.log('Unable to fetch Todos', err)
  // })

  db.collection('Users').find({
    name: 'talc23'
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log('Unable to fetch Todos', err)
  })

  //db.close();
});
