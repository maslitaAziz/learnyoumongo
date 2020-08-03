var mongo = require('mongodb').MongoClient,
     url = 'mongodb://localhost:27017/learnyoumongo',
     firstNameArg = process.argv[2],
     lastNameArg = process.argv[3];

mongo.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db('learnyoumongo');

  var myobj = { firstName: firstNameArg, lastName: lastNameArg };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(myobj));
    db.close();
  });
});



