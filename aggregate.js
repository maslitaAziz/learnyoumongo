var mongo = require('mongodb').MongoClient,
     url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err;

  
let dbo = db.db('learnyoumongo')
  
  dbo.collection('prices').aggregate([
  	
  	{ $match: {
  		size: process.argv[2]
  	}}, 
  	{$group: {
  		_id: 'average', 
  		average: {$avg: '$price'}
  	  	}}
  	]).toArray(function(err, results) {
    	if (err) throw err

    	console.log(Number(results[0].average).toFixed(2))
    	db.close()
  })
})