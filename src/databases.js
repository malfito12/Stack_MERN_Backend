const mongoose =require('mongoose')
// console.log(process.env.MONGODB_URI)
const URI=process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasestest';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    
});

const connection =mongoose.connection
connection.once('open',()=>{
    console.log('conectado a la base de datos')
});