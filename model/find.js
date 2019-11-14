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

module.exports = findListData