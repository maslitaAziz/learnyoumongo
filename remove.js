var mongo = require('mongodb').MongoClient,
     url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db(process.argv[2]);

  
  dbo.collection(process.argv[3]).remove({_id: process.argv[4]}, function(err, res) {
    if (err) throw err;
    console.log("1 document remove");
    db.close();
  });
});


/*var mongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var databaseName = process.argv[2];

var collectionName = process.argv[3];

var url = `mongodb://localhost:27017/${databaseName}`;

var id =  process.argv[4];

mongoClient.connect(url, function(err, DB) {
  if (err) {
    console.log(1);
  }

  var dataBase = DB.db(databaseName);

  dataBase.collection(collectionName).deleteOne({ _id : id })
  .then(function(data) {
    console.log('deleted');
  })
  .catch(function(reason) {
    console.log('failed');
  });

  DB.close();
})*/