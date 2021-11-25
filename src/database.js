
const mongoose=require('mongoose');

const uri = 'mongodb://localhost:27017/admin'

const options = {useNewUrlParser:true, UseUnifiedTopology:true}

mongoose.connect(uri, options).then(
    ()=>{console.log('Conectado a DB')},
    err=>{console.log('err')}
);

module.exports=mongoose