//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');
const assert = require ('assert');

var obj = new ObjectID();
console.log(obj)

// var user = {name:'Ankur',age:26}
// var {name,age} = user;

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

const client = new MongoClient (url);

client.connect (err => {
  assert.equal (null, err);
  console.log ('Connected Sucessfully to Server');
  const db = client.db(dbName);
    // insertDocuments(db,()=>{
    //     client.close ();
    // });
    // insertDocuments2(db,()=>{
    //     client.close ();
    // });
});


const insertDocuments = (db,callback)=>{
    const collection = db.collection('Todos');
    collection.insertOne({
        text: 'Something To do',
        completed: false
    },(err,result)=>{
        assert.equal(err, null);
        console.log("Inserted documents into the collection",JSON.stringify(result.ops,undefined,2));
        callback(result);
    })
}

const insertDocuments2 = (db,callback)=>{
    const collection = db.collection('User');
    collection.insertOne({
        name: 'Ankur',
        age: 26,
        location: 'Hyderabad'
    },(err,result)=>{
        assert.equal(err, null);
        console.log("Inserted documents into the collection",JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        callback(result);
    })
}
