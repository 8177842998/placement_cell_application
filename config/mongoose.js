

// requiring the library
const mongoose = require("mongoose");
//connecting to the database
mongoose.connect(
  'mongodb://127.0.0.1:27017/passport'
)
  // `mongodb://localhost:27017/placement-cell`
  // "mongodb+srv://placed:vishwa40@cluster0.k4ug4kl.mongodb.net/Student_data?retryWrites=true&w=majority"
  // "mongodb+srv://Vishwajit:1pUFSRGhfU3tWOMC@cluster1.ftgiqi0.mongodb.net/Student_data?retryWrites=true&w=majority"
  

// acquiring the connection to check if it is succesfull
const db = mongoose.connection;

// checking for the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", () => {
  console.log("succesfully connected to database");
});


// exporting the connection
module.exports = db;