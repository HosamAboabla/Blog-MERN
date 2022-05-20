const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const topicSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter topic name'],
            unique: true,
        }
    }
);

topicSchema.plugin(uniqueValidator);
module.exports = mongoose.model('topic', topicSchema);
