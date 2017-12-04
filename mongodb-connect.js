const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { if (err) {
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');
  
 //db.collection('Todos').insertOne({
   //  text: 'Something to do',
    // completed: false
     

 //}, (err, result) => {
   //  if(err) {
     //    return console.log('Unable to insert todo', err);
    // }
    // console.log(JSON.stringify(result.ops, undefined, 2));
 //});                                                                      

                                                                       
 db.collection('Users').insertOne({
     _id: 12445566,
    name: 'Allie Herriott',
    tenantID: 12445566,
    address: '15 E Collins Street' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
}); 
    db.collection('Users').insertOne({
     _id: 84789900,
    name: 'Eric Jones',
    tenantID: 84789900,
    address: '204 Withrow Street' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
});
    db.collection('Users').insertOne({
     _id: 12813488,
    name: 'Samantha Krowosky',
    tenantID: 12813488,
    address: '11 E High Street' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
});
 db.collection('Users').insertOne({
     _id: 56789233,
    name: 'Joe Kross',
    tenantID: 56789233,
    address: '20 University Ave' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
}); 
 db.collection('Users').insertOne({
     _id: 46998135,
    name: 'Erica Mann',
    tenantID: 46998135,
    address: '200 W Collins St' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
});
 db.collection('Users').insertOne({
     _id: 23890145,
    name: 'Jessica Blanse',
    tenantID: 23890145,
    address: '15 W Withrow St' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
});
 db.collection('Users').insertOne({
     _id: 85700234,
    name: 'Joseph Miller',
    tenantID: 85700234,
    address: '166 Locust St' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
});
 db.collection('Users').insertOne({
     _id: 36789045,
    name: 'Kerry McGrady',
    tenantID: 36789045,
    address: '1700 College Corner Pike' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
});
 db.collection('Users').insertOne({
     _id: 44557892,
    name: 'Timothy King',
    tenantID: 44557892,
    address: '133 W High Street' 
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }
    
    console.log(result.ops);
});

  
 db.close();   
});
