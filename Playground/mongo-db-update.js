//const MongoClient = require ('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');
const assert = require('assert');

//var obj = new ObjectID();
//console.log(o)

// var user = {name:'Ankur',age:26}
// var {name,age} = user;

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

const client = new MongoClient(url);

client.connect(err => {
    assert.equal(null, err);
    console.log('Connected Sucessfully to Server');


    ///Find one and Update
    const db = client.db(dbName);
    // db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID('5c6e6a6e769aeaac45987388')
    // },{
    //     $set: {
    //      completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }
    
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5c6d185ad9fbd493940544c7')
     },{
         $set: {
          name: "Ankur"
         },
         $inc:{
             age: 1
         }
     },{
         returnOriginal: false
     }
     
     ).then((result) => {
         console.log(result);
     });

    //5c6d185ad9fbd493940544c7
});
