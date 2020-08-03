    var mongo = require('mongodb').MongoClient,
     url = 'mongodb://localhost:27017/learnyoumongo',
     age = parseInt(process.argv[2]);

    mongo.connect(url, function(err, db) {
      // db gives access to the database


      if (err) {
      	console.log('Error');
      }   

      let database = db.db('learnyoumongo')

      database.collection('parrots')
      .find({ 	age:{$gt: +age} })
      .toArray(function(err, documents){
      		if(err) {
      			console.log('Error reading')
      		}
      		console.log(documents)
      		db.close()
      	})
    })