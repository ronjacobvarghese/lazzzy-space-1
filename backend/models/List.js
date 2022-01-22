const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    listname: {
        type: String,
        required: true
    },
    cardList: [{
        cardname: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        }
    }]
})

module.exports = List = mongoose.model('list',ListSchema);