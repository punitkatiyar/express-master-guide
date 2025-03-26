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

const user = mongoose.model("user", userSchema)

module.exports = students
