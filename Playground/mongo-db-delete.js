//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');
const assert = require ('assert');

//var obj = new ObjectID();
//console.log(o)

// var user = {name:'Ankur',age:26}
// var {name,age} = user;

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

const client = new MongoClient (url);

client.connect (err => {
  assert.equal (null, err);
  console.log ('Connected Sucessfully to Server');

  //delete Many
//   const db = client.db(dbName);
//   db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
//     console.log(result);
//   })

//Delete One
// const db = client.db(dbName);
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// })

///Find one and delete
const db = client.db(dbName);
db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  console.log(result);
});

});


