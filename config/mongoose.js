//require the library
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb+srv://shiba1999mandal:1KQGHA2hYAhbnDUr@cluster0.996aolm.mongodb.net/?retryWrites=true&w=majority');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});