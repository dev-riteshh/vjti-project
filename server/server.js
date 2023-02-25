const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const router = require('./routes/startup-routes');
mongoose.set('strictQuery', true);

app.use('/api/startup',router)
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
// app.use(bodyParser.urlencoded({extended:true}))


mongoose
   .connect('mongodb+srv://devriteshhh:R22.Mane@cluster1.astgfdn.mongodb.net/?retryWrites=true&w=majority')
   .then(
    ()=>app.listen(8080)
   )
   .then(
    console.log('connets with db and listen')
   )
   .catch((err)=>{
    console.log(err);
   })