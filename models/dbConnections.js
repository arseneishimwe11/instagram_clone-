const mongoose = require('mongoose')
const userSchema = require('./userSchema')

mongoose.set('strictQuery', true);
const connection = async () =>{
    const dbconn =await mongoose.connect('mongodb://127.0.0.1:27017/IG_clone_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
    try {
        if(dbconn){
            console.log("Connected to the database successfully")
        }else{
            console.log("Not connected to the database")
        }
    } catch (error) {
        console.log(error);
    }
}

connection();
module.exports = connection;