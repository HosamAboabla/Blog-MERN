const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        
        user: {
            type: Schema.Types.ObjectId,
            ref : 'user',
            required: [true, `Enter user's id`]
        },
        post: {
            type: Schema.Types.ObjectId,
            ref : 'blog',
            requied: [true, "Enter post ID"]
        },
        text: {
            type: String,
            required : [true, "Please enter the comment"]
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model('comment', commentSchema);