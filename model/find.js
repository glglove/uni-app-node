<<<<<<< HEAD
const mongoose = require('mongoose');
const findListData = new mongoose.Schema({
    title: {
        type: String,
        
    },
    extra: {
        type: String,

    },
    note: {

    },
    thumbnail: {

    },
    isFull: {

    }
})

let findListData =  mongoose.model('FindListData', findListData);

=======
const mongoose = require('mongoose');
const findListData = new mongoose.Schema({
    title: {
        type: String,
        
    },
    extra: {
        type: String,

    },
    note: {

    },
    thumbnail: {

    },
    isFull: {

    }
})

let findListData =  mongoose.model('FindListData', findListData);

>>>>>>> 08407b781d69c6e80cc19a1350d37860714011cc
module.exports = findListData