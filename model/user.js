<<<<<<< HEAD
const mongoose = require('mongoose');
const users = new mongoose.Schema({
    name: {
        type: String,
    },
    pwd: {
        type: String,

    },
    token: {
        type: String,
    }
})

let Users =  mongoose.model('Users', users);

=======
const mongoose = require('mongoose');
const users = new mongoose.Schema({
    name: {
        type: String,
    },
    pwd: {
        type: String,

    },
    token: {
        type: String,
    }
})

let Users =  mongoose.model('Users', users);

>>>>>>> 08407b781d69c6e80cc19a1350d37860714011cc
module.exports = Users