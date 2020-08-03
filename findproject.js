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
      .find({ 	age:{$gt: +age} }, {fields: {'_id':0, 'name': 1, 'age': 1}})
      .toArray(function(err, documents){
      		if(err) {
      			console.log('Error reading')
      		}
      		console.log(documents)
      		db.close()
      	})
    })


    /*official solution
        var mongo = require('mongodb').MongoClient
    var age = process.argv[2]

    var url = 'mongodb://localhost:27017/learnyoumongo'

    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.find({
        age: {
          $gt: +age
        }
      }, {
        name: 1
      , age: 1
      , _id: 0
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    })*/