const mongoose = require('mongoose');
const findListData = new mongoose.Schema({
    name: {
        type: String,
    },
    pwd: {
        type: String,

    }
})

let findListData =  mongoose.model('FindListData', findListData);

module.exports = findListData