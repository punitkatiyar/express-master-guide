# mongodb with express

## setup mongodb on windows

> mongodb://localhost:27017/

# Setup Express Project

- npm init -y

- npm install express nodemon ejs

- npm i mongoose

## Connection Setup with express
 
```
const mongoose=require('mongoode')

mongoose.connect('mongodb://127.0.0.1:27017/database-nane')

```

## Create Schema

```
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    course: {
        type: String
    }
})

const students = mongoose.model("students", userSchema)

module.exports = students
```

## Import Schema to App

```
const user = require("./models/user.models");
```

## Mongoose Command for CRUD

- **Create : create( )**

- **Read : findById( )**

- **Update : findByIdAndUpdate( )**

- **Delete : findByIdAndDelete( )**

## Display Data

```
app.get('/',async(req,res)=>{
 const students=await Students.find()
 res.render('home',{students})
})

```















